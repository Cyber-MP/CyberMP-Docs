---
editUrl: false
next: false
prev: false
title: "MpLocalStorage"
---

Defined in: local-storage.d.ts:5

Interface providing access to persistent client-side key-value storage.
There is one storage per server address (file `cache/client_resources/<server hash>/.storage`), shared by all client resources of that server. Changes are written to disk only by [save](/reference/client/api/global/mplocalstorage/#save); after that they remain available across game sessions and reconnections to the same server.

## Methods

<a id="delete"></a>

### delete()

> **delete**(`key`): `void`

Defined in: local-storage.d.ts:25

Permanently removes a specific key-value entry from the storage map.

#### Parameters

##### key

`string`

The unique identifier name of the entry to delete.

#### Returns

`void`

***

<a id="deleteall"></a>

### deleteAll()

> **deleteAll**(): `void`

Defined in: local-storage.d.ts:30

Clears all keys and values in the storage of the current server, including keys written by other resources.

#### Returns

`void`

***

<a id="get"></a>

### get()

> **get**(`key`): `string`

Defined in: local-storage.d.ts:19

Retrieves the stored string value associated with the specified key.

#### Parameters

##### key

`string`

The unique identifier name of the entry to fetch.

#### Returns

`string`

The stored value as JSON text: a string saved with `set('k', 'abc')` is returned as `"abc"` (with quotes), a missing key as `null` (the string). Use `JSON.parse` on the result.

***

<a id="save"></a>

### save()

> **save**(): `void`

Defined in: local-storage.d.ts:36

Writes the current in-memory storage to disk.
Nothing is written to disk without this call: unsaved changes are lost when the game exits.

#### Returns

`void`

***

<a id="set"></a>

### set()

> **set**(`key`, `value`): `void`

Defined in: local-storage.d.ts:12

Associates a string value with a specific key in the storage database.
If the key already exists, its value will be overwritten.

#### Parameters

##### key

`string`

The unique identifier name for the storage entry.

##### value

`string`

The plaintext string data payload to be stored. Must be a non-empty string; an empty value is rejected with an error in the console.

#### Returns

`void`
