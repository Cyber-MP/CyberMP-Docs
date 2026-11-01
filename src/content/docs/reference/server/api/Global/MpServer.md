---
editUrl: false
next: false
prev: false
title: "MpServer"
---

Defined in: mp.ts:62

## Properties

<a id="commands"></a>

### commands

> **commands**: [`MpCommands`](/reference/server/api/global/mpcommands/)

Defined in: mp.ts:66

***

<a id="config"></a>

### config

> **config**: [`ServerConfig`](/reference/server/api/global/config/serverconfig/)

Defined in: mp.ts:90

Contents of `server.toml`, parsed on every access. `null` if the file is missing or cannot be parsed.

***

<a id="entities"></a>

### entities

> **entities**: [`MpEntities`](/reference/server/api/entities/mpentities/)

Defined in: mp.ts:67

***

<a id="events"></a>

### events

> **events**: [`MpEvents`](/reference/server/api/events/mpevents/)

Defined in: mp.ts:63

***

<a id="hashes"></a>

### hashes

> **hashes**: [`MpHashes`](/reference/server/api/global/mphashes/)

Defined in: mp.ts:73

***

<a id="meta"></a>

### meta

> **meta**: [`MpMeta`](/reference/server/api/global/mpmeta/)

Defined in: mp.ts:64

***

<a id="mpentity"></a>

### MpEntity

> **MpEntity**: `Class`\<[`MpEntity`](/reference/server/api/entities/mpentity/)\<[`EntityType`](/reference/server/api/entities/entitytype/)\>\>

Defined in: mp.ts:78

***

<a id="mpobject"></a>

### MpObject

> **MpObject**: `Class`\<[`MpObject`](/reference/server/api/entities/objects/mpobject/)\>

Defined in: mp.ts:82

***

<a id="mpped"></a>

### MpPed

> **MpPed**: `Class`\<[`MpPed`](/reference/server/api/entities/peds/mpped/)\>

Defined in: mp.ts:81

***

<a id="mppickup"></a>

### MpPickup

> **MpPickup**: `Class`\<[`MpPickup`](/reference/server/api/entities/pickups/mppickup/)\>

Defined in: mp.ts:79

***

<a id="mpplayer"></a>

### MpPlayer

> **MpPlayer**: `Class`\<[`MpPlayer`](/reference/server/api/entities/players/mpplayer/)\>

Defined in: mp.ts:77

***

<a id="mpvehicle"></a>

### MpVehicle

> **MpVehicle**: `Class`\<[`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)\>

Defined in: mp.ts:80

***

<a id="objects"></a>

### objects

> **objects**: [`MpObjects`](/reference/server/api/entities/objects/mpobjects/)

Defined in: mp.ts:70

***

<a id="peds"></a>

### peds

> **peds**: [`MpPeds`](/reference/server/api/entities/peds/mppeds/)

Defined in: mp.ts:72

***

<a id="pickups"></a>

### pickups

> **pickups**: [`MpPickups`](/reference/server/api/entities/pickups/mppickups/)

Defined in: mp.ts:71

***

<a id="players"></a>

### players

> **players**: [`MpPlayers`](/reference/server/api/entities/players/mpplayers/)

Defined in: mp.ts:69

***

<a id="resources"></a>

### resources

> **resources**: [`MpResources`](/reference/server/api/global/mpresources/)

Defined in: mp.ts:65

***

<a id="vehicles"></a>

### vehicles

> **vehicles**: [`MpVehicles`](/reference/server/api/entities/vehicles/mpvehicles/)

Defined in: mp.ts:68

## Methods

<a id="cancelevent"></a>

### cancelEvent()

> **cancelEvent**(): `void`

Defined in: mp.ts:75

Cancels the platform event that is currently being handled. For game events received from a client (`damage`, `explosion`, `playerHealing`, …) the server then does not relay the event to other clients; state the server already applied is not rolled back. Returning `false` from the handler has no effect — call this method instead.

#### Returns

`void`

***

<a id="isserver"></a>

### isServer()

> **isServer**(): `boolean`

Defined in: mp.ts:88

Checks if the code is running on the server.

#### Returns

`boolean`

True if running on server, false otherwise.
