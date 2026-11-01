---
editUrl: false
next: false
prev: false
title: "MpClient"
---

Defined in: mp.d.ts:22

The main client-side manager interface for CyberMP.
Aggregates all core subsystems, network synchronization mappers, local entity spawning arrays, and game-level APIs.

## Properties

<a id="cef"></a>

### cef

> **cef**: [`MpCef`](/reference/client/api/global/mpcef/)

Defined in: mp.d.ts:46

Controls and interfaces with the embedded Chromium Embedded Framework web views.

***

<a id="commands"></a>

### commands

> **commands**: `MpCommands`

Defined in: mp.d.ts:66

Manages the registration, handling, and unregistration of runtime client console commands.

***

<a id="discord"></a>

### discord

> **discord**: [`MpDiscord`](/reference/client/api/global/mpdiscord/)

Defined in: mp.d.ts:51

Provides access to Discord rich presence and authentications integration layers.

***

<a id="events"></a>

### events

> **events**: [`MpEvents`](/reference/client/api/events/mpevents/)

Defined in: mp.d.ts:31

The client event communication system bridge.

***

<a id="exports"></a>

### exports

> **exports**: `MpExports`

Defined in: mp.d.ts:76

Interface managing cross-resource execution pipelines.

***

<a id="game"></a>

### game

> **game**: [`MpGame`](/reference/client/api/global/mpgame/) & `MpGlobals` & `MpClasses`

Defined in: mp.d.ts:26

Access interface for native game engines, classes, and global engine parameters.

***

<a id="local"></a>

### local

> **local**: `MpLocal`

Defined in: mp.d.ts:61

Manages local player lifecycle operations and the creation of client-side entities.

***

<a id="localstorage"></a>

### localStorage

> **localStorage**: [`MpLocalStorage`](/reference/client/api/global/mplocalstorage/)

Defined in: mp.d.ts:71

Provides access to local key-value data storage states spanning resource restarts.

***

<a id="meta"></a>

### meta

> **meta**: [`MpMeta`](/reference/client/api/global/mpmeta/)

Defined in: mp.d.ts:36

Metadata state synchronization manager across entities and network profiles.

***

<a id="network"></a>

### network

> **network**: `MpNetwork`

Defined in: mp.d.ts:56

Provides networking and entity synchronization utilities

***

<a id="resources"></a>

### resources

> **resources**: `MpResources`

Defined in: mp.d.ts:81

Interface for managing, loading, and tracking resources.

## Methods

<a id="cleartick"></a>

### clearTick()

> **clearTick**(`tickId`): `void`

Defined in: mp.d.ts:112

Removes and unbinds an active rendering cycle tracking loop execution block.

#### Parameters

##### tickId

`number`

The original registration index key returned by [setTick](/reference/client/api/global/mpclient/#settick).

#### Returns

`void`

***

<a id="getlaunchersettings"></a>

### getLauncherSettings()

> **getLauncherSettings**(): `any`

Defined in: mp.d.ts:99

Fetches parsed layout profiles tracking core client options configurations.

#### Returns

`any`

Object tracking client properties choices, or `null` if the game was started without `--settings`.

***

<a id="getlaunchersettingsjson"></a>

### getLauncherSettingsJSON()

> **getLauncherSettingsJSON**(): `string`

Defined in: mp.d.ts:93

Fetches raw unparsed configurations mapping platform launcher operational states.

#### Returns

`string`

Unparsed JSON payload string representing client settings configurations (the `--settings` launch argument), or `null` if the game was started without it.

***

<a id="gettimer"></a>

### getTimer()

> **getTimer**(): `number`

Defined in: mp.d.ts:87

Retrieves total execution duration elapsed since initialization of the master game engine shell layer tracking loops.

#### Returns

`number`

Calculated time tracker measurement value in milliseconds.

***

<a id="settick"></a>

### setTick()

> **setTick**(`cb`): `number`

Defined in: mp.d.ts:106

Registers a callback execution function that runs continuously on every game engine render frame.

#### Parameters

##### cb

() => `any`

The logic routine executed on every render cycle.

#### Returns

`number`

An execution identifier handle index required to disable the execution loop later.
