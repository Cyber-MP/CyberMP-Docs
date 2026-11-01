---
editUrl: false
next: false
prev: false
title: "AppearancePropertyData"
---

> **AppearancePropertyData** = `object`

Defined in: events.ts:125

:::caution
The current server sends this payload as an **array**, not as an object with named fields. Read the values by index in this order: `[meshType, isEnabed, pathToMesh, appearanceHash, chunkMask]`.
:::

## Properties

<a id="appearancehash"></a>

### appearanceHash

> **appearanceHash**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: events.ts:129

***

<a id="chunkmask"></a>

### chunkMask

> **chunkMask**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: events.ts:130

***

<a id="isenabed"></a>

### isEnabed

> **isEnabed**: `boolean`

Defined in: events.ts:127

***

<a id="meshtype"></a>

### meshType

> **meshType**: `number`

Defined in: events.ts:126

***

<a id="pathtomesh"></a>

### pathToMesh

> **pathToMesh**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: events.ts:128
