---
editUrl: false
next: false
prev: false
title: "extended__gameuiICharacterCustomizationSystem"
---

Defined in: game.d.ts:427

Extended by CyberMP `gameuiICharacterCustomizationSystem` class

## Methods

<a id="onplayergenderchanged"></a>

### OnPlayerGenderChanged()

> **OnPlayerGenderChanged**(`gender`): `void`

Defined in: game.d.ts:439

Empty callback called after the session reload started by `SetPlayerGender` finishes. Hook it with `observeAfter` to react.

#### Parameters

##### gender

[`EPlayerGender`](/reference/client/api/enums/eplayergender/)

The incoming target modified gender enumeration value.

#### Returns

`void`

***

<a id="setplayergender"></a>

### SetPlayerGender()

> **SetPlayerGender**(`gender`, `savedPos?`): `void`

Defined in: game.d.ts:433

Changes the local player's gender. If it differs from the current one, the game goes through the main menu and reloads the session; when the reload finishes, `OnPlayerGenderChanged` is called. Does nothing if the gender is already the same.

#### Parameters

##### gender

[`EPlayerGender`](/reference/client/api/enums/eplayergender/)

Target gender enum identifier asset option.

##### savedPos?

`boolean`

Optional, defaults to `true`. Return the player to the current position and yaw after the reload.

#### Returns

`void`
