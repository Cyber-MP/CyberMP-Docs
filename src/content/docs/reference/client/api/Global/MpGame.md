---
editUrl: false
next: false
prev: false
title: "MpGame"
---

Defined in: game.d.ts:251

Core CyberMP Game Interface linking subsystem instances, runtime overrides, using game natives, engine callbacks, and engine utility tasks.

## Properties

<a id="hashes"></a>

### hashes

> **hashes**: [`MpGameHashes`](/reference/client/api/natives/mpgamehashes/)

Defined in: game.d.ts:261

Utility interface providing bidirectional translation between readable game engine naming string conventions
and their encrypted/hashed formats.

***

<a id="observe"></a>

### observe

> **observe**: [`ObserveFunction`](/reference/client/api/global/observefunction/)

Defined in: game.d.ts:347

Standard alias hook pointing to [observeBefore](/reference/client/api/global/mpgame/#observebefore). The hook is placed before the native; the callback itself is queued with `setImmediate` and runs on a later script tick.

#### See

[ObserveFunction](/reference/client/api/global/observefunction/)

***

<a id="observeafter"></a>

### observeAfter

> **observeAfter**: [`ObserveFunction`](/reference/client/api/global/observefunction/)

Defined in: game.d.ts:335

Hooks an observation callback **after** the target native class method executes. The callback is queued with `setImmediate`, so it runs on a later script tick, not inside the native call. Use [observeAfterRaw](/reference/client/api/global/mpgame/#observeafterraw) for a synchronous callback.

#### See

[ObserveFunction](/reference/client/api/global/observefunction/)

***

<a id="observeafterraw"></a>

### observeAfterRaw

> **observeAfterRaw**: [`ObserveFunction`](/reference/client/api/global/observefunction/)

Defined in: game.d.ts:354

Observes a method inside a selected class after execution. The callback runs synchronously inside the hooked call, without the `setImmediate` queue used by [observeAfter](/reference/client/api/global/mpgame/#observeafter).
Should be used when the callback must run at that exact moment; keep it short.

#### See

[ObserveFunction](/reference/client/api/global/observefunction/)

***

<a id="observebefore"></a>

### observeBefore

> **observeBefore**: [`ObserveFunction`](/reference/client/api/global/observefunction/)

Defined in: game.d.ts:341

Hooks an observation callback **before** the target native class method executes. The callback is queued with `setImmediate`, so it runs on a later script tick, not inside the native call. Use [observeBeforeRaw](/reference/client/api/global/mpgame/#observebeforeraw) for a synchronous callback.

#### See

[ObserveFunction](/reference/client/api/global/observefunction/)

***

<a id="observebeforeraw"></a>

### observeBeforeRaw

> **observeBeforeRaw**: [`ObserveFunction`](/reference/client/api/global/observefunction/)

Defined in: game.d.ts:361

Observes a method inside a selected class before execution. The callback runs synchronously inside the hooked call, without the `setImmediate` queue used by [observeBefore](/reference/client/api/global/mpgame/#observebefore).
Should be used when the callback must run at that exact moment; keep it short.

#### See

[ObserveFunction](/reference/client/api/global/observefunction/)

***

<a id="observeraw"></a>

### observeRaw

> **observeRaw**: [`ObserveFunction`](/reference/client/api/global/observefunction/)

Defined in: game.d.ts:367

Standard alias hook pointing to [observeBeforeRaw](/reference/client/api/global/mpgame/#observebeforeraw). The callback runs synchronously before the native executes.

#### See

[ObserveFunction](/reference/client/api/global/observefunction/)

***

<a id="override"></a>

### override

> **override**: [`OverrideFunction`](/reference/client/api/global/overridefunction/)

Defined in: game.d.ts:329

Fully replaces a targeted class method with custom script logic.

#### See

[OverrideFunction](/reference/client/api/global/overridefunction/)

***

<a id="tweakdb"></a>

### TweakDB

> **TweakDB**: [`TweakDB`](/reference/client/api/natives/tweakdb/)

Defined in: game.d.ts:255

The global interface instance for TweakDB manipulation.

## Methods

<a id="addtoinventory"></a>

### AddToInventory()

> **AddToInventory**(`itemName`, `count`): `void`

Defined in: game.d.ts:323

Directly injects or appends an item template into the player's primary inventory framework.

#### Parameters

##### itemName

`string`

The specific TweakDB string ID of the item.

##### count

`number`

Total item quantity stack to add. Optional in the engine function; defaults to `1`.

#### Returns

`void`

***

<a id="fromvariant"></a>

### fromVariant()

> **fromVariant**\<`R`\>(`obj`): `R`

Defined in: game.d.ts:384

Deserializes a native engine container structure layout (`Variant`) back into raw accessible JavaScript object values.

#### Type Parameters

##### R

`R` = `any`

The expected target JavaScript shape format.

#### Parameters

##### obj

`any`

Variant payload container input from the game engine.

#### Returns

`R`

The unwrapped JavaScript object structure data.

***

<a id="getdisplayresolution"></a>

### getDisplayResolution()

> **getDisplayResolution**(): \[`number`, `number`\]

Defined in: game.d.ts:278

Gets the rendering dimensions of the active screen display.

#### Returns

\[`number`, `number`\]

A tuple format containing `[width, height]` in pixels.

***

<a id="getsingleton"></a>

### getSingleton()

> **getSingleton**\<`T`\>(`name`): `UnwrapClass`\<`MpClasses`\[`T`\]\>

Defined in: game.d.ts:316

Resolves and fetches an engine singleton class reference safely.

#### Type Parameters

##### T

`T` *extends* keyof `MpClasses`

The specific key class identifier inside `MpClasses`.

#### Parameters

##### name

`T`

The name identifier string of the singleton.

#### Returns

`UnwrapClass`\<`MpClasses`\[`T`\]\>

The active unwrapped instance object of that designated class.

***

<a id="oncegameloaded"></a>

### onceGameLoaded()

> **onceGameLoaded**(`callback`): `void`

Defined in: game.d.ts:290

Event hook that fires ONCE immediately when the underlying game session finishes initial loading structures.

#### Parameters

##### callback

() => `void`

Execution callback.

#### Returns

`void`

***

<a id="ongameloaded"></a>

### onGameLoaded()

> **onGameLoaded**(`callback`): `void`

Defined in: game.d.ts:284

Event hook that fires immediately when the underlying game session finishes initial loading structures.

#### Parameters

##### callback

() => `void`

Execution callback.

#### Returns

`void`

***

<a id="oninit"></a>

### onInit()

> **onInit**(`callback`): `void`

Defined in: game.d.ts:302

Event hook triggered during early initialization phase of the modding script runtime container.

#### Parameters

##### callback

() => `void`

Execution callback.

#### Returns

`void`

***

<a id="oninputkeyevent"></a>

### onInputKeyEvent()

> **onInputKeyEvent**(`callback`): `void`

Defined in: game.d.ts:267

Registers a callback listener tracking real-time keyboard or controller hardware input events.

#### Parameters

##### callback

(`action`, `key`) => `void`

Function invoked on keystrokes.

#### Returns

`void`

***

<a id="onlocalplayerspawned"></a>

### onLocalPlayerSpawned()

> **onLocalPlayerSpawned**(`callback`): `void`

Defined in: game.d.ts:308

Event hook that triggers immediately after the local user's player character object spawns in the world space.

#### Parameters

##### callback

() => `void`

Execution callback.

#### Returns

`void`

***

<a id="ontweak"></a>

### onTweak()

> **onTweak**(`callback`): `void`

Defined in: game.d.ts:296

Event hook that fires specifically when tweaks and TweakDB engine patches are loaded and safe to manipulate.

#### Parameters

##### callback

() => `void`

Execution callback.

#### Returns

`void`

***

<a id="tovariant"></a>

### toVariant()

> **toVariant**\<`R`\>(`obj`, `str`): `R`

Defined in: game.d.ts:376

Serializes a JavaScript runtime payload object structural value into a native engine container format (`Variant`).

#### Type Parameters

##### R

`R` = `Record`\<`string`, `unknown`\>

The expected return typing output blueprint shape.

#### Parameters

##### obj

`any`

Target entity object structure to convert.

##### str

`string`

Native structural reflection mapping blueprint name string.

#### Returns

`R`

The wrapped engine reference asset layout structure.
