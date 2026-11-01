---
editUrl: false
next: false
prev: false
title: "MpCommands"
---

Defined in: commands.ts:3

## Methods

<a id="add"></a>

### add()

> **add**(`commandName`, `callback`): `void`

Defined in: commands.ts:9

Register a command

#### Parameters

##### commandName

`string`

Command name without "/".

##### callback

(`player`, `args`) => `void`

Callback with player and args.

#### Returns

`void`

***

<a id="remove"></a>

### remove()

> **remove**(`commandName`): `void`

Defined in: commands.ts:18

Unregister a command

#### Parameters

##### commandName

`string`

Command name without "/".

#### Returns

`void`
