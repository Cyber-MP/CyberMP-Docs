---
editUrl: false
next: false
prev: false
title: "EntitiesEvents"
---

Defined in: events.ts:510

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

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
