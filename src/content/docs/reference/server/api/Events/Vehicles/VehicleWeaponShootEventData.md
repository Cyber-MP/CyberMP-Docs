---
editUrl: false
next: false
prev: false
title: "VehicleWeaponShootEventData"
---

> **VehicleWeaponShootEventData** = `object`

Defined in: events.ts:194

:::caution
The current server sends this payload as an **array**, not as an object with named fields. Read the values by index in this order: `[vehicleID, type, numBullets, vehicleType, waeponHash, slotHash, animHash, weaponPosX, weaponPosY, weaponPosZ, offsetPosX, offsetPosY, offsetPosZ, tracePosX, tracePosY, tracePosZ]`.
:::

## Properties

<a id="animhash"></a>

### animHash

> **animHash**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: events.ts:200

***

<a id="numbullets"></a>

### numBullets

> **numBullets**: `number`

Defined in: events.ts:196

***

<a id="offsetposx"></a>

### offsetPosX

> **offsetPosX**: `number`

Defined in: events.ts:204

***

<a id="offsetposy"></a>

### offsetPosY

> **offsetPosY**: `number`

Defined in: events.ts:205

***

<a id="offsetposz"></a>

### offsetPosZ

> **offsetPosZ**: `number`

Defined in: events.ts:206

***

<a id="slothash"></a>

### slotHash

> **slotHash**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: events.ts:199

***

<a id="traceposx"></a>

### tracePosX

> **tracePosX**: `number`

Defined in: events.ts:207

***

<a id="traceposy"></a>

### tracePosY

> **tracePosY**: `number`

Defined in: events.ts:208

***

<a id="traceposz"></a>

### tracePosZ

> **tracePosZ**: `number`

Defined in: events.ts:209

***

<a id="type"></a>

### type

> **type**: `number`

Defined in: events.ts:195

***

<a id="vehicletype"></a>

### vehicleType

> **vehicleType**: `number`

Defined in: events.ts:197

***

<a id="waeponhash"></a>

### waeponHash

> **waeponHash**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: events.ts:198

***

<a id="weaponposx"></a>

### weaponPosX

> **weaponPosX**: `number`

Defined in: events.ts:201

***

<a id="weaponposy"></a>

### weaponPosY

> **weaponPosY**: `number`

Defined in: events.ts:202

***

<a id="weaponposz"></a>

### weaponPosZ

> **weaponPosZ**: `number`

Defined in: events.ts:203
