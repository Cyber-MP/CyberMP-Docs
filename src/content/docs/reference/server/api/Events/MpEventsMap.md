---
editUrl: false
next: false
prev: false
title: "MpEventsMap"
---

Defined in: events.ts:553

Handler return values are ignored by the server. To cancel a cancellable event, call [`mp.cancelEvent()`](/reference/server/api/global/mpserver/#cancelevent) inside the handler. For game events sent by a client (`playerId, data` events) cancelling stops the server from relaying the event to other clients.

## Extends

- [`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`PedEvents`](/reference/server/api/events/peds/pedevents/).[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/)

## Methods

<a id="anyresourcestart"></a>

### anyResourceStart()

> **anyResourceStart**(`resourceName`): `void`

Defined in: events.ts:267

Triggered when any resource starts.

#### Parameters

##### resourceName

`string`

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`anyResourceStart`](/reference/server/api/events/resources/resourcesevents/#anyresourcestart)

***

<a id="anyresourcestop"></a>

### anyResourceStop()

> **anyResourceStop**(`resourceName`): `void`

Defined in: events.ts:271

Triggered when any resource stops.

#### Parameters

##### resourceName

`string`

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`anyResourceStop`](/reference/server/api/events/resources/resourcesevents/#anyresourcestop)

***

<a id="anyserverresourcestart"></a>

### anyServerResourceStart()

> **anyServerResourceStart**(`resourceName`): `void`

Defined in: events.ts:275

Triggered when any server resource starts.

#### Parameters

##### resourceName

`string`

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`anyServerResourceStart`](/reference/server/api/events/resources/resourcesevents/#anyserverresourcestart)

***

<a id="anyserverresourcestop"></a>

### anyServerResourceStop()

> **anyServerResourceStop**(`resourceName`): `void`

Defined in: events.ts:279

Triggered when any server resource stops.

#### Parameters

##### resourceName

`string`

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`anyServerResourceStop`](/reference/server/api/events/resources/resourcesevents/#anyserverresourcestop)

***

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`damage`](/reference/server/api/events/players/playersevents/#damage)

***

<a id="doorstatechange"></a>

### doorStateChange()

> **doorStateChange**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:388

Triggered when a any door's state changes.

#### Parameters

##### playerId

`number`

##### data

[`DoorStateChangeEventData`](/reference/server/api/events/world/doorstatechangeeventdata/)

#### Returns

`boolean` \| `void`

#### Inherited from

[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`doorStateChange`](/reference/server/api/events/world/worldevents/#doorstatechange)

***

<a id="entitydespawn"></a>

### entityDespawn()

> **entityDespawn**(`id`, `type`): `void`

Defined in: events.ts:525

Triggered when an entity despawns.

#### Parameters

##### id

`number`

The entity ID

##### type

[`EntityType`](/reference/server/api/entities/entitytype/)

The entity type (see [EntityType](/reference/server/api/entities/entitytype/))

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`entityDespawn`](/reference/server/api/events/entities/entitiesevents/#entitydespawn)

***

<a id="entitymetachange"></a>

### entityMetaChange()

> **entityMetaChange**(`id`, `key`, `newValue`, `oldValue`): `void`

Defined in: events.ts:547

Triggered when any entity meta changed

#### Parameters

##### id

`number`

Entity ID

##### key

`string`

##### newValue

`any`

##### oldValue

`any`

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`entityMetaChange`](/reference/server/api/events/entities/entitiesevents/#entitymetachange)

***

<a id="entityspawn"></a>

### entitySpawn()

> **entitySpawn**(`id`, `type`): `void`

Defined in: events.ts:517

Triggered when an entity spawns.

#### Parameters

##### id

`number`

The entity ID

##### type

[`EntityType`](/reference/server/api/entities/entitytype/)

The entity type (see [EntityType](/reference/server/api/entities/entitytype/))

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`entitySpawn`](/reference/server/api/events/entities/entitiesevents/#entityspawn)

***

<a id="explosion"></a>

### explosion()

> **explosion**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:406

Triggered when an explosion occurs.

#### Parameters

##### playerId

`number`

##### data

[`ExplosionEventData`](/reference/server/api/events/world/explosioneventdata/)

#### Returns

`boolean` \| `void`

#### Inherited from

[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`explosion`](/reference/server/api/events/world/worldevents/#explosion)

***

<a id="fire"></a>

### fire()

> **fire**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:402

Triggered when a fire starts anywhere on map.

#### Parameters

##### playerId

`number`

##### data

[`FireEventData`](/reference/server/api/events/world/fireeventdata/)

#### Returns

`boolean` \| `void`

#### Inherited from

[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`fire`](/reference/server/api/events/world/worldevents/#fire)

***

<a id="gameobjectdespawn"></a>

### gameObjectDespawn()

> **gameObjectDespawn**(`id`): `void`

Defined in: events.ts:543

Triggered when a game object despawns.

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`gameObjectDespawn`](/reference/server/api/events/entities/entitiesevents/#gameobjectdespawn)

***

<a id="gameobjectspawn"></a>

### gameObjectSpawn()

> **gameObjectSpawn**(`id`): `void`

Defined in: events.ts:539

Triggered when a game object spawns.

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`gameObjectSpawn`](/reference/server/api/events/entities/entitiesevents/#gameobjectspawn)

***

<a id="globalmetachange"></a>

### globalMetaChange()

> **globalMetaChange**(`key`, `newValue`, `oldValue`): `void`

Defined in: events.ts:410

Triggered when global meta changed

#### Parameters

##### key

`string`

##### newValue

`any`

##### oldValue

`any`

#### Returns

`void`

#### Inherited from

[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`globalMetaChange`](/reference/server/api/events/world/worldevents/#globalmetachange)

***

<a id="liftstatechange"></a>

### liftStateChange()

> **liftStateChange**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:395

Triggered when a any lift's state changes.

#### Parameters

##### playerId

`number`

##### data

[`LiftStateChangeEventData`](/reference/server/api/events/world/liftstatechangeeventdata/)

#### Returns

`boolean` \| `void`

#### Inherited from

[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`liftStateChange`](/reference/server/api/events/world/worldevents/#liftstatechange)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`meleeAction`](/reference/server/api/events/players/playersevents/#meleeaction)

***

<a id="objectdespawn"></a>

### objectDespawn()

> **objectDespawn**(`id`): `void`

Defined in: events.ts:534

Triggered when an object despawns.

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`objectDespawn`](/reference/server/api/events/entities/entitiesevents/#objectdespawn)

***

<a id="objectspawn"></a>

### objectSpawn()

> **objectSpawn**(`id`): `void`

Defined in: events.ts:530

Triggered when an object spawns.

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`objectSpawn`](/reference/server/api/events/entities/entitiesevents/#objectspawn)

***

<a id="peddespawn"></a>

### pedDespawn()

> **pedDespawn**(`id`): `void`

Defined in: events.ts:504

Triggered when a ped despawns.

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

[`PedEvents`](/reference/server/api/events/peds/pedevents/).[`pedDespawn`](/reference/server/api/events/peds/pedevents/#peddespawn)

***

<a id="pedspawn"></a>

### pedSpawn()

> **pedSpawn**(`id`): `void`

Defined in: events.ts:500

Triggered when a ped spawns.

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

[`PedEvents`](/reference/server/api/events/peds/pedevents/).[`pedSpawn`](/reference/server/api/events/peds/pedevents/#pedspawn)

***

<a id="pickupchange"></a>

### pickupChange()

> **pickupChange**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:469

Triggered when a pickup's state changes.

#### Parameters

##### playerId

`number`

##### data

[`PickupChangeEventData`](/reference/server/api/events/pickups/pickupchangeeventdata/)

#### Returns

`boolean` \| `void`

#### Inherited from

[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`pickupChange`](/reference/server/api/events/pickups/pickupsevents/#pickupchange)

***

<a id="pickupdespawn"></a>

### pickupDespawn()

> **pickupDespawn**(`id`): `void`

Defined in: events.ts:489

Triggered when a pickup despawns.

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`pickupDespawn`](/reference/server/api/events/pickups/pickupsevents/#pickupdespawn)

***

<a id="pickupdrop"></a>

### pickupDrop()

> **pickupDrop**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:479

Triggered when a pickup is dropped.

#### Parameters

##### playerId

`number`

##### data

[`PickupCreateEventData`](/reference/server/api/events/pickups/pickupcreateeventdata/)

#### Returns

`boolean` \| `void`

#### Inherited from

[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`pickupDrop`](/reference/server/api/events/pickups/pickupsevents/#pickupdrop)

***

<a id="pickupraise"></a>

### pickupRaise()

> **pickupRaise**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:474

Triggered when a pickup is raised.

#### Parameters

##### playerId

`number`

##### data

[`PickupDespawnEventData`](/reference/server/api/events/pickups/pickupdespawneventdata/)

#### Returns

`boolean` \| `void`

#### Inherited from

[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`pickupRaise`](/reference/server/api/events/pickups/pickupsevents/#pickupraise)

***

<a id="pickupspawn"></a>

### pickupSpawn()

> **pickupSpawn**(`id`): `void`

Defined in: events.ts:484

Triggered when a pickup spawns.

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`pickupSpawn`](/reference/server/api/events/pickups/pickupsevents/#pickupspawn)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerAppearanceChange`](/reference/server/api/events/players/playersevents/#playerappearancechange)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerConnected`](/reference/server/api/events/players/playersevents/#playerconnected)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerConnecting`](/reference/server/api/events/players/playersevents/#playerconnecting)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerDeath`](/reference/server/api/events/players/playersevents/#playerdeath)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerDespawn`](/reference/server/api/events/players/playersevents/#playerdespawn)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerDisconnected`](/reference/server/api/events/players/playersevents/#playerdisconnected)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerEnterVehicle`](/reference/server/api/events/players/playersevents/#playerentervehicle)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerExitVehicle`](/reference/server/api/events/players/playersevents/#playerexitvehicle)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerHealing`](/reference/server/api/events/players/playersevents/#playerhealing)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerKnockdown`](/reference/server/api/events/players/playersevents/#playerknockdown)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerMetaChange`](/reference/server/api/events/players/playersevents/#playermetachange)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerRespawn`](/reference/server/api/events/players/playersevents/#playerrespawn)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerSpawn`](/reference/server/api/events/players/playersevents/#playerspawn)

***

<a id="resourcesrefresh"></a>

### resourcesRefresh()

> **resourcesRefresh**(): `void`

Defined in: events.ts:291

Triggered when resources are refreshed.

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`resourcesRefresh`](/reference/server/api/events/resources/resourcesevents/#resourcesrefresh)

***

<a id="resourcestart"></a>

### resourceStart()

> **resourceStart**(): `void`

Defined in: events.ts:283

Triggered when a resource starts.

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`resourceStart`](/reference/server/api/events/resources/resourcesevents/#resourcestart)

***

<a id="resourcestop"></a>

### resourceStop()

> **resourceStop**(): `void`

Defined in: events.ts:287

Triggered when a resource stops.

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`resourceStop`](/reference/server/api/events/resources/resourcesevents/#resourcestop)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`shootAction`](/reference/server/api/events/players/playersevents/#shootaction)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`throwGrenade`](/reference/server/api/events/players/playersevents/#throwgrenade)

***

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

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleCustomizationChange`](/reference/server/api/events/vehicles/vehiclesevents/#vehiclecustomizationchange)

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

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleDespawn`](/reference/server/api/events/vehicles/vehiclesevents/#vehicledespawn)

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

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleDestructionChange`](/reference/server/api/events/vehicles/vehiclesevents/#vehicledestructionchange)

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

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleHittedByPlayer`](/reference/server/api/events/vehicles/vehiclesevents/#vehiclehittedbyplayer)

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

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleSpawn`](/reference/server/api/events/vehicles/vehiclesevents/#vehiclespawn)

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

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleWeaponShoot`](/reference/server/api/events/vehicles/vehiclesevents/#vehicleweaponshoot)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`weaponReload`](/reference/server/api/events/players/playersevents/#weaponreload)
