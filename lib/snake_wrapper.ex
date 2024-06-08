defmodule Venomous.SnakeWrapper do
  @moduledoc """
  Wrapper for SnakeManager GenServer to run python functions.
  """
  alias Venomous.SnakeManager

  @doc """
  Call python GenServer
  """

  require Logger
  @wait_for_snake_interval 100

  def slay_python_worker(pid, pypid) do
    Logger.warning("KILLING")
    :python.stop(pypid)
    send(SnakeManager, {:sacrifice_snake, pid})
  end

  defp get_snakes_ready(0, acc), do: acc

  defp get_snakes_ready(amount, acc) do
    case retrieve_snake() do
      {:error, _} -> acc
      pids -> get_snakes_ready(amount - 1, [pids | acc])
    end
  end

  def get_snakes_ready(amount) when is_integer(amount), do: get_snakes_ready(amount, [])

  @spec retrieve_snake() :: {:error, reason :: term()} | {pid(), pid()}
  @doc """
  Retrieves ready SnakeWorker and python pids.
  If all processes are busy and exceeds max_children will return {:error, message}.

  ## Returns
    - A tuple `{pid, pid}` containing the process IDs of the SnakeWorker and python processes. In case of error `{:error, message}`
  """
  def retrieve_snake(), do: GenServer.call(SnakeManager, :get_ready_snake, :infinity)

  @spec retrieve_snake!(non_neg_integer()) :: {pid(), pid()}
  @doc """
  Retrieves ready SnakeWorker and python pids.
  If all processes are busy and exceeds max_children will wait for interval ms and try again.
  ## Parameters
    - interval: The time to wait in milliseconds before retrying. Default is `@wait_for_snake_interval`.

  ## Returns
    - A tuple `{pid, pid}` containing the process IDs of the SnakeWorker and python processes.
  """
  def retrieve_snake!(interval \\ @wait_for_snake_interval) do
    case retrieve_snake() do
      {:error, _} ->
        Process.sleep(interval)
        retrieve_snake!(interval)

      process_ids ->
        process_ids
    end
  end

  def python(module, func, args, python_timeout \\ 120_000) do
    # Prevents :python processes from not exiting
    # Process.flag(:trap_exit, true)
    # Venomous.SnakeSupervisor |> DynamicSupervisor.count_children() |> dbg

    case GenServer.call(SnakeManager, :get_ready_snake, :infinity) do
      {:error, _} ->
        receive do
          {:EXIT, _from, _reason} ->
            exit(:normal)
        after
          0 ->
            python(module, func, args)
        end

      {pid, pypid} ->
        GenServer.call(pid, {:run_snake, self(), {module, func, args}})

        receive do
          {:EXIT, _from, _type} ->
            slay_python_worker(pid, pypid)
            exit(:normal)

          {:EXIT, _type} ->
            slay_python_worker(pid, pypid)
            exit(:normal)

          {:SNAKE_DONE, data} ->
            GenServer.call(SnakeManager, {:employ_snake, pid, pypid}, :infinity)

            data

          {:SNAKE_ERROR, error} ->
            slay_python_worker(pid, pypid)
            error
        after
          python_timeout ->
            slay_python_worker(pid, pypid)
            Logger.warning("#{pypid} TIMED OUT")
            %{error: "timeout"}
            exit(:timeout)
        end
    end
  end
end
