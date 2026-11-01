---
editUrl: false
next: false
prev: false
title: "MultiplayerSystem"
---

Defined in: game.d.ts:196

Custom CyberMP System managing asset deletion maps, and basic spawn configurations.
Accessible through `mp.game.ScriptGameInstance.GetMultiplayerSystem()`

## Constructors

<a id="constructor"></a>

### Constructor

> **new MultiplayerSystem**(): `MultiplayerSystem`

#### Returns

`MultiplayerSystem`

## Methods

<a id="declaredeletedobjects"></a>

### DeclareDeletedObjects()

> **DeclareDeletedObjects**(`objectClassMap`): `void`

Defined in: game.d.ts:201

Declares game object classes (e.g., `GameObject`, `Door`) whose world entities the client disposes locally when they appear.

#### Parameters

##### objectClassMap

keyof `MpClasses`[]

Array of class names from `MpClasses` to clear.

#### Returns

`void`

***

<a id="deletedobjectsbyuniquehash"></a>

### DeletedObjectsByUniqueHash()

> **DeletedObjectsByUniqueHash**(`objectHashMap`): `void`

Defined in: game.d.ts:207

Removes specific game objects from the network replication map using their unique hash keys.

#### Parameters

##### objectHashMap

`string`[]

Array of unique entity hashes to delete.

#### Returns

`void`

***

<a id="setdefaultspawnposition"></a>

### SetDefaultSpawnPosition()

> **SetDefaultSpawnPosition**(`position`, `yaw`): `void`

Defined in: game.d.ts:220

Sets the initial default coordinate and orientation fallback position when spawning players.

#### Parameters

##### position

`Vector3`

The 3D coordinates vector.

##### yaw

`number`

The horizontal rotation (yaw angle) in degrees/radians.

#### Returns

`void`

***

<a id="usedefaulteffectsbyplatform"></a>

### UseDefaultEffectsByPlatform()

> **UseDefaultEffectsByPlatform**(`value`): `void`

Defined in: game.d.ts:213

Enables or disables synchronization of default game effects, as defined by the CyberMP platform.

#### Parameters

##### value

`boolean`

`true` to utilize default synchronization effects, `false` to disable them.

#### Returns

`void`
