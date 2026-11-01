---
editUrl: false
next: false
prev: false
title: "VehicleCustomizationChangeEventData"
---

> **VehicleCustomizationChangeEventData** = `object`

Defined in: events.ts:162

:::caution
The current server sends this payload as an **array**, not as an object with named fields. Read the values by index in this order: `[vehicleID, hashAppearance, isEnabledVehCustomization, lightsColorDefined, lightsColorHue, primaryColorB, primaryColorDefined, primaryColorG, primaryColorR, secondaryColorB, secondaryColorDefined, secondaryColorG, secondaryColorR, isVehicleWasCustomized, isDisabledVehCustomizationByDamage]`.
:::

## Properties

<a id="hashappearance"></a>

### hashAppearance

> **hashAppearance**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: events.ts:177

***

<a id="isdisabledvehcustomizationbydamage"></a>

### isDisabledVehCustomizationByDamage

> **isDisabledVehCustomizationByDamage**: `boolean`

Defined in: events.ts:165

***

<a id="isenabledvehcustomization"></a>

### isEnabledVehCustomization

> **isEnabledVehCustomization**: `boolean`

Defined in: events.ts:164

***

<a id="isvehiclewascustomized"></a>

### isVehicleWasCustomized

> **isVehicleWasCustomized**: `boolean`

Defined in: events.ts:163

***

<a id="lightscolordefined"></a>

### lightsColorDefined

> **lightsColorDefined**: `boolean`

Defined in: events.ts:166

***

<a id="lightscolorhue"></a>

### lightsColorHue

> **lightsColorHue**: `number`

Defined in: events.ts:167

***

<a id="primarycolorb"></a>

### primaryColorB

> **primaryColorB**: `number`

Defined in: events.ts:170

***

<a id="primarycolordefined"></a>

### primaryColorDefined

> **primaryColorDefined**: `boolean`

Defined in: events.ts:171

***

<a id="primarycolorg"></a>

### primaryColorG

> **primaryColorG**: `number`

Defined in: events.ts:169

***

<a id="primarycolorr"></a>

### primaryColorR

> **primaryColorR**: `number`

Defined in: events.ts:168

***

<a id="secondarycolorb"></a>

### secondaryColorB

> **secondaryColorB**: `number`

Defined in: events.ts:174

***

<a id="secondarycolordefined"></a>

### secondaryColorDefined

> **secondaryColorDefined**: `boolean`

Defined in: events.ts:175

***

<a id="secondarycolorg"></a>

### secondaryColorG

> **secondaryColorG**: `number`

Defined in: events.ts:173

***

<a id="secondarycolorr"></a>

### secondaryColorR

> **secondaryColorR**: `number`

Defined in: events.ts:172

***

<a id="vehicleid"></a>

### vehicleID

> **vehicleID**: `number`

Defined in: events.ts:176
