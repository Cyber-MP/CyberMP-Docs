---
editUrl: false
next: false
prev: false
title: "AppearanceWeightPropertyData"
---

> **AppearanceWeightPropertyData** = `object`

Defined in: events.ts:136

:::caution
The current server sends this payload as an **array**, not as an object with named fields. Read the values by index in this order: `[targetHash, regionHash, weight]`.
:::

## Properties

<a id="regionhash"></a>

### regionHash

> **regionHash**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: events.ts:138

***

<a id="targethash"></a>

### targetHash

> **targetHash**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: events.ts:137

***

<a id="weight"></a>

### weight

> **weight**: `number`

Defined in: events.ts:139
