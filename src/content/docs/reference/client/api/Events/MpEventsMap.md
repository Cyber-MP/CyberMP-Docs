---
editUrl: false
next: false
prev: false
title: "MpEventsMap"
---

Defined in: events.d.ts:6

Map of core multiplayer engine events triggered by the client runtime environment.
Covers resource lifecycles, network streaming updates, and entity synchronization.

## Methods

<a id="anyresourcestart"></a>

### anyResourceStart()

> **anyResourceStart**(`resourceName`): `void`

Defined in: events.d.ts:11

Fired when any local client resource starts running (not fired for the internal `CyberMP_Core` resource). The runtime also queues `anyClientResourceStart` with the same argument.

#### Parameters

##### resourceName

`string`

The unique identification name of the started resource.

#### Returns

`void`

***

<a id="anyresourcestop"></a>

### anyResourceStop()

> **anyResourceStop**(`resourceName`): `void`

Defined in: events.d.ts:17

Fired when any local client resource is stopped or restarted (not fired for `CyberMP_Core`). The runtime also queues `anyClientResourceStop` with the same argument.

#### Parameters

##### resourceName

`string`

The unique identification name of the stopped resource.

#### Returns

`void`

***

<a id="anyserverresourcestart"></a>

### anyServerResourceStart()

> **anyServerResourceStart**(`resourceName`): `void`

Defined in: events.d.ts:23

Server-side event. The client runtime never emits it (client code emits `anyClientResourceStart` instead), so a client listener is not called.

#### Parameters

##### resourceName

`string`

The unique identification name of the server resource.

#### Returns

`void`

***

<a id="anyserverresourcestop"></a>

### anyServerResourceStop()

> **anyServerResourceStop**(`resourceName`): `void`

Defined in: events.d.ts:29

Server-side event. The client runtime never emits it (client code emits `anyClientResourceStop` instead), so a client listener is not called.

#### Parameters

##### resourceName

`string`

The unique identification name of the server resource.

#### Returns

`void`

***

<a id="objectstreamin"></a>

### objectStreamIn()

> **objectStreamIn**(`netID`, `gameID`): `void`

Defined in: events.d.ts:58

Fired when a synchronized game object enters the local player's streaming radius.

#### Parameters

##### netID

`number`

The network-assigned entity identification hash.

##### gameID

`number`

The native engine entity handling index ID.

#### Returns

`void`

***

<a id="objectstreamout"></a>

### objectStreamOut()

> **objectStreamOut**(`netID`, `gameID`): `void`

Defined in: events.d.ts:51

Fired when a synchronized game object leaves the local player's streaming radius.

#### Parameters

##### netID

`number`

The network-assigned entity identification hash.

##### gameID

`number`

The native engine entity handling index ID.

#### Returns

`void`

***

<a id="pedstreamin"></a>

### pedStreamIn()

> **pedStreamIn**(`netID`, `gameID`): `void`

Defined in: events.d.ts:72

Fired when a synchronized pedestrian or NPC enters the local player's streaming radius.

#### Parameters

##### netID

`number`

The network-assigned entity identification hash.

##### gameID

`number`

The native engine entity handling index ID.

#### Returns

`void`

***

<a id="pedstreamout"></a>

### pedStreamOut()

> **pedStreamOut**(`netID`, `gameID`): `void`

Defined in: events.d.ts:65

Fired when a synchronized pedestrian or NPC leaves the local player's streaming radius.

#### Parameters

##### netID

`number`

The network-assigned entity identification hash.

##### gameID

`number`

The native engine entity handling index ID.

#### Returns

`void`

***

<a id="remoteplayerstreamin"></a>

### remotePlayerStreamIn()

> **remotePlayerStreamIn**(`netID`, `gameID`): `void`

Defined in: events.d.ts:86

Fired when a remote network player enters the local user's streaming zone.

#### Parameters

##### netID

`number`

The network-assigned player synchronization ID.

##### gameID

`number`

The native engine entity handling index ID.

#### Returns

`void`

***

<a id="remoteplayerstreamout"></a>

### remotePlayerStreamOut()

> **remotePlayerStreamOut**(`netID`, `gameID`): `void`

Defined in: events.d.ts:79

Fired when a remote network player leaves the local user's streaming zone.

#### Parameters

##### netID

`number`

The network-assigned player synchronization ID.

##### gameID

`number`

The native engine entity handling index ID.

#### Returns

`void`

***

<a id="resourcesrefresh"></a>

### resourcesRefresh()

> **resourcesRefresh**(): `void`

Defined in: events.d.ts:44

Server-side event, emitted after the server re-scans its resources. The client runtime never emits it.

#### Returns

`void`

***

<a id="resourcestart"></a>

### resourceStart()

> **resourceStart**(): `void`

Defined in: events.d.ts:34

Fired specifically when *this* individual script resource completes loading.

#### Returns

`void`

***

<a id="resourcestop"></a>

### resourceStop()

> **resourceStop**(): `void`

Defined in: events.d.ts:39

Fired specifically when *this* individual script resource is being shut down.

#### Returns

`void`

***

<a id="vehiclestreamin"></a>

### vehicleStreamIn()

> **vehicleStreamIn**(`netID`, `gameID`): `void`

Defined in: events.d.ts:100

Fired when a synchronized vehicle enters the local player's streaming radius.

#### Parameters

##### netID

`number`

The network-assigned entity identification hash.

##### gameID

`number`

The native engine entity handling index ID.

#### Returns

`void`

***

<a id="vehiclestreamout"></a>

### vehicleStreamOut()

> **vehicleStreamOut**(`netID`, `gameID`): `void`

Defined in: events.d.ts:93

Fired when a synchronized vehicle leaves the local player's streaming radius.

#### Parameters

##### netID

`number`

The network-assigned entity identification hash.

##### gameID

`number`

The native engine entity handling index ID.

#### Returns

`void`
