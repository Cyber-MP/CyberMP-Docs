---
editUrl: false
next: false
prev: false
title: "VehiclesEvents"
---

Defined in: events.ts:417

Events related to Vehicles.

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

<a id="vehiclecustomizationchange"></a>

### vehicleCustomizationChange()

> **vehicleCustomizationChange**(`playerId`, `data`): `void`

Defined in: events.ts:421

Triggered when a vehicle's customization changes (usually CrystalCoat).

#### Parameters

##### playerId

`number`

##### data

[`VehicleCustomizationChangeEventData`](/reference/server/api/events/vehicles/vehiclecustomizationchangeeventdata/)

#### Returns

`void`

***

<a id="vehicledespawn"></a>

### vehicleDespawn()

> **vehicleDespawn**(`id`): `void`

Defined in: events.ts:442

Triggered when a vehicle despawns.

#### Parameters

##### id

`number`

#### Returns

`void`

***

<a id="vehicledestructionchange"></a>

### vehicleDestructionChange()

> **vehicleDestructionChange**(`playerId`, `data`): `void`

Defined in: events.ts:429

Triggered when a vehicle's destruction changes.

#### Parameters

##### playerId

`number`

##### data

[`VehicleDestructionChangeEventData`](/reference/server/api/events/vehicles/vehicledestructionchangeeventdata/)

#### Returns

`void`

***

<a id="vehiclehittedbyplayer"></a>

### vehicleHittedByPlayer()

> **vehicleHittedByPlayer**(`id`, `data`): `boolean` \| `void`

Defined in: events.ts:455

Triggered when a vehicle is hit by a player.

`id` is the ID of the player who sent the event. `data` is an array: `[vehicleID, componentNameHash, weaponHash, byOwner]`.

#### Parameters

##### id

`number`

##### data

`VehicleHittedByPlayerEventData`

#### Returns

`boolean` \| `void`

***

<a id="vehiclespawn"></a>

### vehicleSpawn()

> **vehicleSpawn**(`id`): `void`

Defined in: events.ts:437

Triggered when a vehicle spawns.

#### Parameters

##### id

`number`

#### Returns

`void`

***

<a id="vehicleweaponshoot"></a>

### vehicleWeaponShoot()

> **vehicleWeaponShoot**(`id`, `data`): `boolean` \| `void`

Defined in: events.ts:447

Triggered when a vehicle's weapon shoots.

`id` is the ID of the player who sent the event (the vehicle ID is inside `data`).

#### Parameters

##### id

`number`

##### data

[`VehicleWeaponShootEventData`](/reference/server/api/events/vehicles/vehicleweaponshooteventdata/)

#### Returns

`boolean` \| `void`
