---
editUrl: false
next: false
prev: false
title: "extended__vehicleBaseObject"
---

Defined in: game.d.ts:473

Extended by CyberMP `vehicleBaseObject` class

## Methods

<a id="addlinelyvelocity"></a>

### AddLinelyVelocity()

> **AddLinelyVelocity**(`velocity`, `angularVelocity`): `boolean`

Defined in: game.d.ts:493

Imparts instantaneous raw linear velocity vector impulses into the structural entity coordinates frame.

#### Parameters

##### velocity

`Vector3`

Linear velocity vector forces factor.

##### angularVelocity

`Vector3`

Angular momentum spinning forces vector.

#### Returns

`boolean`

`true` if impulse registers onto object layers.

***

<a id="changelinelyvelocity"></a>

### ChangeLinelyVelocity()

> **ChangeLinelyVelocity**(`velocity`, `angularVelocity`, `switchIndex`): `boolean`

Defined in: game.d.ts:502

Explicitly sets or resets the exact speed vectors tracking ongoing object momentum.

#### Parameters

##### velocity

`Vector3`

Target directional speed vector values coordinates.

##### angularVelocity

`Vector3`

Target rotational angular values coordinates.

##### switchIndex

`number`

`1` sets only `velocity`, `2` sets only `angularVelocity`, any other value sets both.

#### Returns

`boolean`

`true` if velocity state fields successfully updated.

***

<a id="enablegravity"></a>

### EnableGravity()

> **EnableGravity**(`enable`): `boolean`

Defined in: game.d.ts:485

Enables or disables physics engine gravity forces on this vehicle.

#### Parameters

##### enable

`boolean`

`true` to apply normal downforce gravity, `false` to disable.

#### Returns

`boolean`

`true` if state adjusted successfully.

***

<a id="getangularvelocity"></a>

### GetAngularVelocity()

> **GetAngularVelocity**(): `Vector3`

Defined in: game.d.ts:518

Retrieves the current rotation speed vector parameters tracking operational values.

#### Returns

`Vector3`

Rotational velocity tracking data vector.

***

<a id="getboundarybox"></a>

### GetBoundaryBox()

> **GetBoundaryBox**(): `Box`

Defined in: game.d.ts:536

Retrieves structural bounding box spatial calculation variables for collision tracking.

#### Returns

`Box`

Object bounding structural frame dimensional properties limits.

***

<a id="getphysicsstate"></a>

### GetPhysicsState()

> **GetPhysicsState**(): `number`

Defined in: game.d.ts:524

Retrieves the physics engine simulation state mask flags from the object tracking loop.

#### Returns

`number`

Numeric evaluation bitmask tracking active states.

***

<a id="getvelocity"></a>

### GetVelocity()

> **GetVelocity**(): `Vector3`

Defined in: game.d.ts:512

Retrieves the ongoing linear velocity vectors representing forward/lateral speed momentum.

#### Returns

`Vector3`

Directional speed coordinate matrix vector tracking values.

***

<a id="hasgravity"></a>

### HasGravity()

> **HasGravity**(): `boolean`

Defined in: game.d.ts:478

Confirms whether gravity properties are currently influencing the physical vehicle entity.

#### Returns

`boolean`

`true` if gravity calculations are active, otherwise `false`.

***

<a id="isonground"></a>

### IsOnGround()

> **IsOnGround**(): `boolean`

Defined in: game.d.ts:530

Checks whether the vehicle tires or frame base are actively making physical contact with terrain/surfaces.

#### Returns

`boolean`

`true` if supported on terrain boundaries, otherwise `false`.

***

<a id="vehicleownerwaschanged"></a>

### VehicleOwnerWasChanged()

> **VehicleOwnerWasChanged**(): `void`

Defined in: game.d.ts:541

Call it after the vehicle owner changed: sends a `VehicleFinishedMountingEvent` (local player, seat `seat_front_left`) to the vehicle component so the driver mount state is restored.

#### Returns

`void`
