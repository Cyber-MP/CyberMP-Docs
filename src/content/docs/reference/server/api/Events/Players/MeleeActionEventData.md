---
editUrl: false
next: false
prev: false
title: "MeleeActionEventData"
---

> **MeleeActionEventData** = [`Vector3Object`](/reference/server/api/events/world/vector3object/) & `object`

Defined in: events.ts:50

:::caution
The current server sends this payload as an **array**, not as an object with named fields. Read the values by index in this order: `[type, weaponHash, instigatorID, x, y, z]`.
:::

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `instigatorID` | `number` | events.ts:53 |
| `type` | [`MeleeActionType`](/reference/server/api/events/players/meleeactiontype/) | events.ts:51 |
| `weaponHash` | [`GameHash`](/reference/server/api/hashes/gamehash/) | events.ts:52 |
