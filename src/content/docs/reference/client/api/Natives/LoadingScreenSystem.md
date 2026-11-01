---
editUrl: false
next: false
prev: false
title: "LoadingScreenSystem"
---

Defined in: game.d.ts:228

System providing status and progression access for the game's loading screen interface.
Accessible through `mp.game.ScriptGameInstance.GetLoadingScreenSystem()`

## Constructors

<a id="constructor"></a>

### Constructor

> **new LoadingScreenSystem**(): `LoadingScreenSystem`

#### Returns

`LoadingScreenSystem`

## Methods

<a id="getloadingscreenprogress"></a>

### GetLoadingScreenProgress()

> **GetLoadingScreenProgress**(): `number`

Defined in: game.d.ts:239

Gets the numeric loading progression factor.

#### Returns

`number`

A value representing loading progress (from 0 to 100).

***

<a id="getloadingscreenstate"></a>

### GetLoadingScreenState()

> **GetLoadingScreenState**(): [`ELoadingScreenState`](/reference/client/api/enums/eloadingscreenstate/)

Defined in: game.d.ts:233

Retrieves the current explicit state of the loading screen lifecycle.

#### Returns

[`ELoadingScreenState`](/reference/client/api/enums/eloadingscreenstate/)

The state enum value.

***

<a id="onloadingscreenstatechange"></a>

### OnLoadingScreenStateChange()

> **OnLoadingScreenStateChange**(`newState`): `void`

Defined in: game.d.ts:245

Callback fired or invoked when the loading screen switches states.

#### Parameters

##### newState

[`ELoadingScreenState`](/reference/client/api/enums/eloadingscreenstate/)

The new incoming loading screen state enum value.

#### Returns

`void`
