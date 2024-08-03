sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"},{"anchor":"mix-tasks","id":"Mix Tasks"}],"id":"api-reference","title":"API Reference"},{"group":"","headers":[{"anchor":"installation","id":"Installation"},{"anchor":"getting-started","id":"Getting Started"},{"anchor":"quickstart","id":"Quickstart"}],"id":"readme","title":"README"},{"group":"","headers":[{"anchor":"creating-an-encoder-decoder","id":"Creating an encoder/decoder"}],"id":"python","title":"Quick guide on erlport Python API"}],"modules":[{"deprecated":false,"group":"","id":"Venomous","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"adopt_snake_pet/2","deprecated":false,"id":"adopt_snake_pet/2","title":"adopt_snake_pet(name, opts \\\\ [])"},{"anchor":"clean_inactive_snakes/0","deprecated":false,"id":"clean_inactive_snakes/0","title":"clean_inactive_snakes()"},{"anchor":"get_snakes_ready/1","deprecated":false,"id":"get_snakes_ready/1","title":"get_snakes_ready(amount)"},{"anchor":"list_alive_snakes/0","deprecated":false,"id":"list_alive_snakes/0","title":"list_alive_snakes()"},{"anchor":"pet_snake_run/3","deprecated":false,"id":"pet_snake_run/3","title":"pet_snake_run(args, name, timeout \\\\ 15000)"},{"anchor":"python/2","deprecated":false,"id":"python/2","title":"python(snake_args, opts \\\\ [])"},{"anchor":"python!/2","deprecated":false,"id":"python!/2","title":"python!(snake_args, opts \\\\ [])"},{"anchor":"retrieve_snake/0","deprecated":false,"id":"retrieve_snake/0","title":"retrieve_snake()"},{"anchor":"retrieve_snake!/1","deprecated":false,"id":"retrieve_snake!/1","title":"retrieve_snake!(interval \\\\ 100)"},{"anchor":"slay_pet_worker/2","deprecated":false,"id":"slay_pet_worker/2","title":"slay_pet_worker(name, termination_style \\\\ :peaceful)"},{"anchor":"slay_python_worker/2","deprecated":false,"id":"slay_python_worker/2","title":"slay_python_worker(snake_worker, termination_style \\\\ :peaceful)"},{"anchor":"snake_run/3","deprecated":false,"id":"snake_run/3","title":"snake_run(snake_args, worker, opts \\\\ [])"}]}],"sections":[{"anchor":"module-main-functionality","id":"Main Functionality"},{"anchor":"module-architecture","id":"Architecture"},{"anchor":"module-configuration-options","id":"Configuration Options"},{"anchor":"module-auxiliary-functions","id":"Auxiliary Functions"}],"title":"Venomous"},{"deprecated":false,"group":"","id":"Venomous.Application","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start/2","deprecated":false,"id":"start/2","title":"start(type, args)"}]}],"sections":[],"title":"Venomous.Application"},{"deprecated":false,"group":"","id":"Venomous.PetSnakeManager","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","deprecated":false,"id":"child_spec/1","title":"child_spec(init_arg)"},{"anchor":"init/1","deprecated":false,"id":"init/1","title":"init(state)"},{"anchor":"start_link/1","deprecated":false,"id":"start_link/1","title":"start_link(args)"}]}],"sections":[],"title":"Venomous.PetSnakeManager"},{"deprecated":false,"group":"","id":"Venomous.PetSnakeSupervisor","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","deprecated":false,"id":"child_spec/1","title":"child_spec(arg)"},{"anchor":"deploy_snake_pet/1","deprecated":false,"id":"deploy_snake_pet/1","title":"deploy_snake_pet(opts \\\\ [])"},{"anchor":"init/1","deprecated":false,"id":"init/1","title":"init(opts)"},{"anchor":"start_link/1","deprecated":false,"id":"start_link/1","title":"start_link(opts \\\\ [strategy: :one_for_one, max_children: 10])"}]}],"sections":[],"title":"Venomous.PetSnakeSupervisor"},{"deprecated":false,"group":"","id":"Venomous.SerpentWatcher","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","deprecated":false,"id":"child_spec/1","title":"child_spec(init_arg)"},{"anchor":"handle_continue/2","deprecated":false,"id":"handle_continue/2","title":"handle_continue(atom, state)"},{"anchor":"init/1","deprecated":false,"id":"init/1","title":"init(args)"},{"anchor":"start_link/1","deprecated":false,"id":"start_link/1","title":"start_link(args)"}]}],"sections":[],"title":"Venomous.SerpentWatcher"},{"deprecated":false,"group":"","id":"Venomous.SnakeArgs","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","deprecated":false,"id":"t/0","title":"t()"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"from_params/3","deprecated":false,"id":"from_params/3","title":"from_params(module, func, args)"}]}],"sections":[],"title":"Venomous.SnakeArgs"},{"deprecated":false,"group":"","id":"Venomous.SnakeError","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","deprecated":false,"id":"t/0","title":"t()"}]}],"sections":[],"title":"Venomous.SnakeError"},{"deprecated":false,"group":"","id":"Venomous.SnakeManager","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","deprecated":false,"id":"child_spec/1","title":"child_spec(init_arg)"},{"anchor":"get_snake_worker_status/2","deprecated":false,"id":"get_snake_worker_status/2","title":"get_snake_worker_status(table, pid)"},{"anchor":"handle_continue/2","deprecated":false,"id":"handle_continue/2","title":"handle_continue(atom, state)"},{"anchor":"init/1","deprecated":false,"id":"init/1","title":"init(state)"},{"anchor":"start_link/1","deprecated":false,"id":"start_link/1","title":"start_link(args)"}]}],"sections":[{"anchor":"module-configuration","id":"Configuration"}],"title":"Venomous.SnakeManager"},{"deprecated":false,"group":"","id":"Venomous.SnakeOpts","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"to_erlport_opts/1","deprecated":false,"id":"to_erlport_opts/1","title":"to_erlport_opts(opts)"}]}],"sections":[],"title":"Venomous.SnakeOpts"},{"deprecated":false,"group":"","id":"Venomous.SnakeSupervisor","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","deprecated":false,"id":"child_spec/1","title":"child_spec(arg)"},{"anchor":"deploy_snake_worker/1","deprecated":false,"id":"deploy_snake_worker/1","title":"deploy_snake_worker(opts \\\\ [])"},{"anchor":"init/1","deprecated":false,"id":"init/1","title":"init(opts)"},{"anchor":"start_link/1","deprecated":false,"id":"start_link/1","title":"start_link(opts \\\\ [strategy: :one_for_one, max_children: 50])"}]}],"sections":[],"title":"Venomous.SnakeSupervisor"},{"deprecated":false,"group":"","id":"Venomous.SnakeWorker","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","deprecated":false,"id":"t/0","title":"t()"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","deprecated":false,"id":"child_spec/1","title":"child_spec(init_arg)"},{"anchor":"handle_continue/2","deprecated":false,"id":"handle_continue/2","title":"handle_continue(arg, pypid)"},{"anchor":"init/1","deprecated":false,"id":"init/1","title":"init(opts)"},{"anchor":"start_link/1","deprecated":false,"id":"start_link/1","title":"start_link(args)"}]}],"sections":[{"anchor":"module-configuration","id":"Configuration"}],"title":"Venomous.SnakeWorker"}],"tasks":[{"deprecated":false,"group":"","id":"Mix.Tasks.Venomous.Watchdog","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"uninstall_watchdog/0","deprecated":false,"id":"uninstall_watchdog/0","title":"uninstall_watchdog()"}]}],"sections":[],"title":"mix venomous.watchdog"}]}