---
editUrl: false
next: false
prev: false
title: "MpResources"
---

Defined in: resources.ts:8

## Methods

<a id="getcurrentname"></a>

### getCurrentName()

> **getCurrentName**(): `string`

Defined in: resources.ts:50

Gets the current resource's name.

#### Returns

`string`

Resource name.

***

<a id="getstate"></a>

### getState()

> **getState**(`resourceName`): [`ResourceState`](/reference/server/api/global/resourcestate/)

Defined in: resources.ts:21

Gets the current state of a resource.

#### Parameters

##### resourceName

`string`

The resource to check.

#### Returns

[`ResourceState`](/reference/server/api/global/resourcestate/)

Resource state as a number (see [ResourceState](/reference/server/api/global/resourcestate/)). Returns `0` (`NotRunning`) if the resource does not exist.

***

<a id="gettoml"></a>

### getTOML()

> **getTOML**(`name`): `string`

Defined in: resources.ts:14

Reads `resource.toml` of the given resource and returns it converted to a JSON string.

#### Parameters

##### name

`string`

Name of the resource.

#### Returns

`string`

`resource.toml` contents as a JSON string (use `JSON.parse`). `null` if the resource or file is missing, empty string if the TOML fails to parse.

***

<a id="loadfile"></a>

### loadFile()

> **loadFile**(`resourceName`, `pathToResource`): `string`

Defined in: resources.ts:58

Reads a file inside a resource and returns its contents.

#### Parameters

##### resourceName

`string`

Name of the resource.

##### pathToResource

`string`

Path to the file.

#### Returns

`string`

File content as string, or `null` if the resource or file does not exist.

***

<a id="refresh"></a>

### refresh()

> **refresh**(): `void`

Defined in: resources.ts:44

Re-indexes all resources

#### Returns

`void`

***

<a id="restart"></a>

### restart()

> **restart**(`resourceName`): `void`

Defined in: resources.ts:39

Restarts a specific resource by name.

#### Parameters

##### resourceName

`string`

Name of the resource to restart.

#### Returns

`void`

***

<a id="start"></a>

### start()

> **start**(`resourceName`): `void`

Defined in: resources.ts:27

Starts a specific resource by name.

#### Parameters

##### resourceName

`string`

Name of the resource to start.

#### Returns

`void`

***

<a id="stop"></a>

### stop()

> **stop**(`resourceName`): `void`

Defined in: resources.ts:33

Stops a specific resource by name.

#### Parameters

##### resourceName

`string`

Name of the resource to stop.

#### Returns

`void`
