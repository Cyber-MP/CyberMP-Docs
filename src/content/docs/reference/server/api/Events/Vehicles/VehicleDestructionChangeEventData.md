---
editUrl: false
next: false
prev: false
title: "VehicleDestructionChangeEventData"
---

> **VehicleDestructionChangeEventData** = `object`

Defined in: events.ts:183

:::caution
The current server sends this payload as an **array**, not as an object with named fields. Read the values by index in this order: `[vehicleID, brokenGlass, brokenLights, flatTire, windshieldShattered]`.
:::

## Properties

<a id="brokenglass"></a>

### brokenGlass

> **brokenGlass**: `number`

Defined in: events.ts:185

***

<a id="brokenlights"></a>

### brokenLights

> **brokenLights**: `number`

Defined in: events.ts:186

***

<a id="flattire"></a>

### flatTire

> **flatTire**: `number`

Defined in: events.ts:187

***

<a id="vehicleid"></a>

### vehicleID

> **vehicleID**: `number`

Defined in: events.ts:184

***

<a id="windshieldshattered"></a>

### windshieldShattered

> **windshieldShattered**: `boolean`

Defined in: events.ts:188
