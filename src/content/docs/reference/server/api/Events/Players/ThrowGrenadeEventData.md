---
editUrl: false
next: false
prev: false
title: "ThrowGrenadeEventData"
---

> **ThrowGrenadeEventData** = `object`

Defined in: events.ts:67

:::caution
The current server sends this payload as an **array**, not as an object with named fields. Read the values by index in this order: `[weaponHash, type, isQuickThrow, accelerationZ, initialVelocity, forwardX, forwardY, forwardZ, aimposX, aimposY, aimposZ]`.
:::

## Properties

<a id="accelerationz"></a>

### accelerationZ

> **accelerationZ**: `number`

Defined in: events.ts:71

***

<a id="aimposx"></a>

### aimposX

> **aimposX**: `number`

Defined in: events.ts:76

***

<a id="aimposy"></a>

### aimposY

> **aimposY**: `number`

Defined in: events.ts:77

***

<a id="aimposz"></a>

### aimposZ

> **aimposZ**: `number`

Defined in: events.ts:78

***

<a id="forwardx"></a>

### forwardX

> **forwardX**: `number`

Defined in: events.ts:73

***

<a id="forwardy"></a>

### forwardY

> **forwardY**: `number`

Defined in: events.ts:74

***

<a id="forwardz"></a>

### forwardZ

> **forwardZ**: `number`

Defined in: events.ts:75

***

<a id="initialvelocity"></a>

### initialVelocity

> **initialVelocity**: `number`

Defined in: events.ts:72

***

<a id="isquickthrow"></a>

### isQuickThrow

> **isQuickThrow**: `boolean`

Defined in: events.ts:70

***

<a id="type"></a>

### type

> **type**: `number`

Defined in: events.ts:69

***

<a id="weaponhash"></a>

### weaponHash

> **weaponHash**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: events.ts:68
