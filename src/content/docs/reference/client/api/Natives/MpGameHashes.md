---
editUrl: false
next: false
prev: false
title: "MpGameHashes"
---

Defined in: game.d.ts:147

Utility interface providing bidirectional translation between readable game engine naming string conventions
and their encrypted/hashed formats.

## Methods

<a id="fromcname"></a>

### fromCname()

> **fromCname**(`hash`): `string`

Defined in: game.d.ts:188

Reverses a native engine 64-bit name identification token identifier (`CName`) back into its human-readable plaintext string label.

#### Parameters

##### hash

`string`

The string representation of the target CName identifier.

#### Returns

`string`

The corresponding unhashed string literal value.

***

<a id="fromresref"></a>

### fromResref()

> **fromResref**(`hash`): `string`

Defined in: game.d.ts:174

Translates a native game engine Resource Reference (`ResRef`) asset identifier string back into its readable raw directory path string.

#### Parameters

##### hash

`string`

The target ResRef hash format token layout string.

#### Returns

`string`

The verified asset resource string path.

***

<a id="fromtweakdbid"></a>

### fromTweakdbid()

> **fromTweakdbid**(`hash`): `string`

Defined in: game.d.ts:160

Resolves an internal TweakDBID hash signature string back into its original readable record path string.

#### Parameters

##### hash

`string`

The native TweakDBID hash layout signature.

#### Returns

`string`

The readable path text description string if found, otherwise an empty or fallback string representation.

***

<a id="tocname"></a>

### toCname()

> **toCname**(`name`): `string`

Defined in: game.d.ts:181

Converts a standard text identifier string into its corresponding internal engine unique 64-bit string identifier (`CName`) hash representation.

#### Parameters

##### name

`string`

The plaintext string label configuration name to translate.

#### Returns

`string`

The matching numeric engine structure string token representation.

***

<a id="toresref"></a>

### toResref()

> **toResref**(`name`): `string`

Defined in: game.d.ts:167

Resolves a resource file route or asset system address string into its Resource Reference (`ResRef`) hash (FNV-1a 64), returned as a decimal string.

#### Parameters

##### name

`string`

The full system asset path string (e.g., `"base\\characters\\main_npc\\jackie.ent"`).

#### Returns

`string`

The matching native ResRef serialization target hash key.

***

<a id="totweakdbid"></a>

### toTweakdbid()

> **toTweakdbid**(`name`): `string`

Defined in: game.d.ts:153

Converts a TweakDB record string path into its unique TweakDBID hash signature format.

#### Parameters

##### name

`string`

The text record path string (e.g., `"Items.money"`).

#### Returns

`string`

The resolved TweakDBID hash string reference.
