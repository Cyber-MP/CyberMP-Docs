---
editUrl: false
next: false
prev: false
title: "TweakDB"
---

Defined in: game.d.ts:69

Interface for interacting with the game's TweakDB database.
TweakDB contains static game data, tweaks, and entity configurations.

## Methods

<a id="createrecord"></a>

### createRecord()

> **createRecord**(`key`, `value`): `boolean`

Defined in: game.d.ts:139

Runtime creates a new TweakDB record.

#### Parameters

##### key

`string`

The new record identifier key.

##### value

`string`

The record blueprint or type definition key.

#### Returns

`boolean`

`true` if creation succeeded, otherwise `false`.

***

<a id="getflat"></a>

### getFlat()

> **getFlat**\<`T`\>(`str`): `T`

Defined in: game.d.ts:99

Retrieves a "flat" property value directly from TweakDB.

#### Type Parameters

##### T

`T` = `any`

The expected type of the flat property.

#### Parameters

##### str

`string`

The path to the flat property (e.g., "Items.SomeItem.someProperty").

#### Returns

`T`

The flat property value.

***

<a id="getrecord"></a>

### getRecord()

> **getRecord**\<`T`\>(`str`): `T`

Defined in: game.d.ts:84

Retrieves a single record from TweakDB.

#### Type Parameters

##### T

`T` = `any`

The expected type of the record.

#### Parameters

##### str

`string`

The specific TweakDB ID or path string.

#### Returns

`T`

The requested record.

***

<a id="getrecords"></a>

### getRecords()

> **getRecords**\<`T`\>(`str`): `T`[]

Defined in: game.d.ts:76

Retrieves all records of one record type. Returns `null` if the type is unknown.

#### Type Parameters

##### T

`T` = `any`

The expected type of the records.

#### Parameters

##### str

`string`

The record type name (RTTI class name, e.g. `"gamedataVehicle_Record"`), not a record path.

#### Returns

`T`[]

An array of matching records.

***

<a id="query"></a>

### query()

> **query**(`str`): `string`[]

Defined in: game.d.ts:91

Queries TweakDB paths and returns matching entry keys.

#### Parameters

##### str

`string`

The search or query pattern string.

#### Returns

`string`[]

An array of matching string IDs.

***

<a id="setflat"></a>

### setFlat()

> **setFlat**(`str`, `obj`): `boolean`

Defined in: game.d.ts:115

Writes (or creates) a single flat property value in TweakDB. Does **not** refresh the record: call [updateRecord](/reference/client/api/natives/tweakdb/#updaterecord) afterwards.

#### Parameters

##### str

`string`

The path to the flat property.

##### obj

`any`

The new value to assign.

#### Returns

`boolean`

`true` if the operation was successful, otherwise `false`.

***

<a id="setflatnoupdate"></a>

### setFlatNoUpdate()

> **setFlatNoUpdate**(`str`, `obj`): `boolean`

Defined in: game.d.ts:124

Writes (or creates) a flat property value in TweakDB and then refreshes the parent record (`updateRecord`).
Despite the name, this is the variant that updates the record. For batches use [setFlat](/reference/client/api/natives/tweakdb/#setflat) and one `updateRecord`.

#### Parameters

##### str

`string`

The path to the flat property.

##### obj

`any`

The new value to assign.

#### Returns

`boolean`

`true` if the operation was successful, otherwise `false`.

***

<a id="setflats"></a>

### setFlats()

> **setFlats**(`str`, `arr`): `boolean`

Defined in: game.d.ts:107

Intended to write several flats `<str>.<key>` of one record and then refresh it with `updateRecord`.
In the current runtime both the key and the value are taken from the same array element, so each string element `s` only sets flat `<str>.s` to `s`. Use [setFlat](/reference/client/api/natives/tweakdb/#setflat) for each flat instead.

#### Parameters

##### str

`string`

The record path.

##### arr

`any`[]

The new array of values to assign.

#### Returns

`boolean`

`true` if the operation was successful, otherwise `false`.

***

<a id="updaterecord"></a>

### updateRecord()

> **updateRecord**(`str`): `boolean`

Defined in: game.d.ts:131

Forces the engine to re-read and update a specific record from its current TweakDB state.

#### Parameters

##### str

`string`

The path to the record to update.

#### Returns

`boolean`

`true` if the update succeeded, otherwise `false`.
