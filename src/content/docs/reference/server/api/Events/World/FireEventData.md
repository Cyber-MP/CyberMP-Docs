---
editUrl: false
next: false
prev: false
title: "FireEventData"
---

> **FireEventData** = [`Vector3Object`](/reference/server/api/events/world/vector3object/) & `object`

Defined in: events.ts:224

:::caution
The current server sends this payload as an **array**, not as an object with named fields. Read the values by index in this order: `[hashObject, posX, posY, posZ, dirX, dirY, dirZ]`.
:::

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `dirX` | `number` | events.ts:226 |
| `dirY` | `number` | events.ts:227 |
| `dirZ` | `number` | events.ts:228 |
| `hashObject` | [`GameHash`](/reference/server/api/hashes/gamehash/) | events.ts:225 |
