---
editUrl: false
next: false
prev: false
title: "PickupCreateEventData"
---

> **PickupCreateEventData** = [`Vector3Object`](/reference/server/api/events/world/vector3object/) & `object`

Defined in: events.ts:252

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `isBag` | `boolean` | events.ts:256 |
| `pickupNetId` | `number` | events.ts:253 |
| `type` | `number` | — |
| `types` | `number`[] | — |

The server does not send `pickupHash` / `pickupHashes` in this payload (payload keys: `pickupNetId`, `type`, `posX`, `posY`, `posZ`, `isBag`, `types`).
