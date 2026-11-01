---
editUrl: false
next: false
prev: false
title: "PlayersEvents"
---

Defined in: events.ts:298

Events related to players.

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

<a id="damage"></a>

### damage()

> **damage**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:357

Triggered when a player takes damage.

#### Parameters

##### playerId

`number`

##### data

[`DamageEventData`](/reference/server/api/events/players/damageeventdata/)

#### Returns

`boolean` \| `void`

***

<a id="meleeaction"></a>

### meleeAction()

> **meleeAction**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:361

Triggered when a player performs a melee action.

#### Parameters

##### playerId

`number`

##### data

[`MeleeActionEventData`](/reference/server/api/events/players/meleeactioneventdata/)

#### Returns

`boolean` \| `void`

***

<a id="playerappearancechange"></a>

### playerAppearanceChange()

> **playerAppearanceChange**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:330

Triggered when a player's appearance changes.

#### Parameters

##### playerId

`number`

##### data

[`PlayerAppearanceChangeEventData`](/reference/server/api/events/players/playerappearancechangeeventdata/)

#### Returns

`boolean` \| `void`

***

<a id="playerconnected"></a>

### playerConnected()

> **playerConnected**(`playerId`, `tempId`): `void`

Defined in: events.ts:306

Triggered when a player has connected.

#### Parameters

##### playerId

`number`

##### tempId

`string`

#### Returns

`void`

***

<a id="playerconnecting"></a>

### playerConnecting()

> **playerConnecting**(`tempId`, `name`): `void`

Defined in: events.ts:302

Triggered when a player is connecting.

#### Parameters

##### tempId

`number`

##### name

`string`

#### Returns

`void`

***

<a id="playerdeath"></a>

### playerDeath()

> **playerDeath**(`playerId`, `data`): `void`

Defined in: events.ts:322

Triggered when a player dies.

#### Parameters

##### playerId

`number`

##### data

[`PlayerDeathEventData`](/reference/server/api/events/players/playerdeatheventdata/)

#### Returns

`void`

***

<a id="playerdespawn"></a>

### playerDespawn()

> **playerDespawn**(`playerId`): `void`

Defined in: events.ts:318

Triggered when a player despawns.

#### Parameters

##### playerId

`number`

#### Returns

`void`

***

<a id="playerdisconnected"></a>

### playerDisconnected()

> **playerDisconnected**(`playerId`, `reason`): `void`

Defined in: events.ts:326

Triggered when a player disconnects.

#### Parameters

##### playerId

`number`

##### reason

`string`

#### Returns

`void`

***

<a id="playerentervehicle"></a>

### playerEnterVehicle()

> **playerEnterVehicle**(`playerId`, `vehicleId`, `seat`): `void`

Defined in: events.ts:349

Triggered when a player enters a vehicle.

:::caution
The current server never emits an event named `playerEnterVehicle`. Its handler for this game event is named `enterVehicle` and is called as `(playerId, [vehicleId, seat])`.
:::

#### Parameters

##### playerId

`number`

##### vehicleId

`number`

##### seat

[`VehicleSeat`](/reference/server/api/entities/vehicles/vehicleseat/)

#### Returns

`void`

***

<a id="playerexitvehicle"></a>

### playerExitVehicle()

> **playerExitVehicle**(`playerId`, `vehicleId`): `void`

Defined in: events.ts:345

Triggered when a player exits a vehicle.

:::caution
The current server never emits an event named `playerExitVehicle`. Its handler for this game event is named `exitVehicle` and is called as `(playerId, [vehicleId])`.
:::

#### Parameters

##### playerId

`number`

##### vehicleId

`number`

#### Returns

`void`

***

<a id="playerhealing"></a>

### playerHealing()

> **playerHealing**(`playerId`): `boolean` \| `void`

Defined in: events.ts:337

Triggered when a player's healing.

#### Parameters

##### playerId

`number`

#### Returns

`boolean` \| `void`

***

<a id="playerknockdown"></a>

### playerKnockdown()

> **playerKnockdown**(`playerId`): `boolean` \| `void`

Defined in: events.ts:341

Triggered when a player's knocked down.

#### Parameters

##### playerId

`number`

#### Returns

`boolean` \| `void`

***

<a id="playermetachange"></a>

### playerMetaChange()

> **playerMetaChange**(`id`, `key`, `newValue`, `oldValue`): `void`

Defined in: events.ts:377

Triggered when player meta changed

#### Parameters

##### id

`number`

Player ID

##### key

`string`

##### newValue

`any`

##### oldValue

`any`

#### Returns

`void`

***

<a id="playerrespawn"></a>

### playerRespawn()

> **playerRespawn**(`playerId`, `data`): `void`

Defined in: events.ts:314

Triggered when a player respawns.

#### Parameters

##### playerId

`number`

##### data

[`Vector3Object`](/reference/server/api/events/world/vector3object/)

#### Returns

`void`

***

<a id="playerspawn"></a>

### playerSpawn()

> **playerSpawn**(`playerId`): `void`

Defined in: events.ts:310

Triggered when a player spawns.

#### Parameters

##### playerId

`number`

#### Returns

`void`

***

<a id="shootaction"></a>

### shootAction()

> **shootAction**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:365

Triggered when a player performs a shoot action.

#### Parameters

##### playerId

`number`

##### data

[`ShootActionEventData`](/reference/server/api/events/players/shootactioneventdata/)

#### Returns

`boolean` \| `void`

***

<a id="throwgrenade"></a>

### throwGrenade()

> **throwGrenade**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:373

Triggered when a player throws a grenade.

#### Parameters

##### playerId

`number`

##### data

[`ThrowGrenadeEventData`](/reference/server/api/events/players/throwgrenadeeventdata/)

#### Returns

`boolean` \| `void`

***

<a id="weaponreload"></a>

### weaponReload()

> **weaponReload**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:369

Triggered when a player reloads their weapon.

The second argument is an array with one element: `[weaponHash]`.

#### Parameters

##### playerId

`number`

##### data

\[[`GameHash`](/reference/server/api/hashes/gamehash/)\]

#### Returns

`boolean` \| `void`
