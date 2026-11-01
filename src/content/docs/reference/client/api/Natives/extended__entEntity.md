---
editUrl: false
next: false
prev: false
title: "extended__entEntity"
---

Defined in: game.d.ts:402

Extended by CyberMP `entEntity` class

## Methods

<a id="getmorphtargets"></a>

### GetMorphTargets()

> **GetMorphTargets**(): `entMorphTargetWeightEntry`[]

Defined in: game.d.ts:407

Obtains lists specifying explicit weight indexes controlling facial custom blendshapes or structural targets.
The method is registered in the engine as `GetMorphTargets` (the types call it `GetMorphWeights`, which does not exist). It always returns the morph weights of the local player, whatever entity it is called on.

#### Returns

`entMorphTargetWeightEntry`[]

Array listing mesh blend weights structures.

***

<a id="reassemblewithcomponents"></a>

### ReassembleWithComponents()

> **ReassembleWithComponents**(`arr`): `void`

Defined in: game.d.ts:413

Forces the entity container model frame structural layers to assemble and update via selected visual components arrays.

#### Parameters

##### arr

`entIComponent`[]

List containing components structures to attach.

#### Returns

`void`

***

<a id="teleportped"></a>

### TeleportPed()

> **TeleportPed**(`position`, `rotation?`): `void`

Defined in: game.d.ts:420

Teleports a physical game object / Pedestrian directly to specific vector coordinates.

#### Parameters

##### position

`Vector3`

Target 3D destination coordinate vector.

##### rotation?

`EulerAngles`

Optional Euler orientation layout coordinates (Pitch, Roll, Yaw).

#### Returns

`void`
