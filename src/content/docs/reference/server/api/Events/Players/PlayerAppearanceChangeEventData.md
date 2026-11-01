---
editUrl: false
next: false
prev: false
title: "PlayerAppearanceChangeEventData"
---

> **PlayerAppearanceChangeEventData** = `object`

Defined in: events.ts:145

:::caution
The current server sends this payload as an **array**, not as an object with named fields. Read the values by index in this order: `[skinneds, garments, morphs, weights]`.
:::

## Properties

<a id="garments"></a>

### garments

> **garments**: [`AppearancePropertyData`](/reference/server/api/events/players/appearancepropertydata/)[]

Defined in: events.ts:147

***

<a id="morphs"></a>

### morphs

> **morphs**: [`AppearancePropertyData`](/reference/server/api/events/players/appearancepropertydata/)[]

Defined in: events.ts:148

***

<a id="skinneds"></a>

### skinneds

> **skinneds**: [`AppearancePropertyData`](/reference/server/api/events/players/appearancepropertydata/)[]

Defined in: events.ts:146

***

<a id="weights"></a>

### weights

> **weights**: [`AppearanceWeightPropertyData`](/reference/server/api/events/players/appearanceweightpropertydata/)[]

Defined in: events.ts:149
