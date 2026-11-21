---
title: Console
description: Built-in commands of the CyberMP server console, their arguments and what they print.
---

The server console is the terminal the server runs in. Type a command and press Enter to manage resources or run administrative commands while the server is running.

Besides the built-in commands below, every command a resource registers with `mp.commands.add` can be typed here too. See the [commands guide](/guides/server/commands).

## Built-in commands

| Name            | Arguments    | Description                                                                              |
| --------------- | ------------ | ---------------------------------------------------------------------------------------- |
| cmdlist         | None         | Lists every registered command: the built-in ones and those registered by resources.     |
| config          | None         | Prints a `key / source / value` table of the effective root `server.toml` values. `source` is `toml`, the name of the environment variable that set the value, or `-` when the key is `<not configured>`. `private_token` is masked. |
| kick_player     | `<playerId>` | Disconnects the player with that id. Takes exactly one argument; no reason is sent.      |
| max_players     | `[integer]`  | Prints or sets the console variable, e.g. `"max_players" = "20"`. Only exists when `max_players` is set in `server.toml`. The enforced slot cap is read from `server.toml` at startup and does not change. |
| quit            | None         | Shuts the server down.                                                                   |
| refresh         | None         | Rescans the `resources` folder without starting or stopping anything. Prints `Resources initializing...` and fires the `resourcesRefresh` event. |
| restart         | `<resName>`  | Stops, then starts the resource.                                                         |
| start           | `<resName>`  | Starts the resource. Prints `unknown resource name <resName>` if no such resource is known. |
| stop            | `<resName>`  | Stops the resource.                                                                      |
| version         | None         | Prints the server version, e.g. `CyberMP Server v4.0.4-beta.1`.                          |

There is no `help` command; use `cmdlist`.

How a line is read:

- Command names are not case-sensitive: a resource command registered as `online` also runs when you type `ONLINE`.
- Arguments are separated by spaces; several spaces count as one.
- Text in double quotes is passed as a single argument, so `kick 5 "being rude"` has two arguments. Single quotes do not group.

In v4.0.4-beta.1, `config` lists `tcp_host`, `udp_host` and `resources` as `<not configured>` even when they are set in `server.toml`. The server does use them; only the table is incomplete.

`cmdlist` also shows a few names you normally don't type yourself:

| Name | Description |
| --- | --- |
| run, -justpack | The commands behind the `-run` and `--justpack` [launch flags](/reference/server/configuration#command-line-flags). |
| tcp_host, udp_host, disable_voice | Counterparts of the `server.toml` keys of the same name. `disable_voice` prints its current value; `tcp_host` and `udp_host` expect an argument. |
| add_var, add_shared_var, add_server_var | Create console variables. `add_var <name> <value>` creates one; typing a variable's name prints its value. |

## Output and errors

Console and log lines have the form `[time] [source] message`. The source is `server` or `resources` for the server itself, and the resource name for anything a resource prints:

```
[10:35:18] [resources] Loaded resource hello_world
[10:35:18] [hello_world] Hello World from CyberMP Server!
```

| Message | Meaning |
| --- | --- |
| `<name> command doesn't exist!` | No built-in or resource command has that name. |
| `incorrect number of args` | The command exists but was given too few or too many arguments. |
| `[Error] error in command '<name>': …` | The handler of a resource command threw an error. The server keeps running. |

For a walkthrough of `refresh`, `start`, `stop` and `restart`, see [Interacting with resources](/guides/resources/interacting-with-resources).
