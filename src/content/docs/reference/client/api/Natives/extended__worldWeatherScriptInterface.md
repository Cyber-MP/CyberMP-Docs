---
editUrl: false
next: false
prev: false
title: "extended__worldWeatherScriptInterface"
---

Defined in: game.d.ts:446

Extended by CyberMP `worldWeatherScriptInterface` class

## Methods

<a id="resetweather"></a>

### ResetWeather()

> **ResetWeather**(`forceRestore?`, `blendTime?`): `boolean`

Defined in: game.d.ts:466

Clears ongoing script-driven environmental alterations and returns to automated weather loops.

#### Parameters

##### forceRestore?

`boolean`

Optional flag bypass to drop timelines and clear immediately.

##### blendTime?

`number`

Optional transition timeline layout duration in seconds.

#### Returns

`boolean`

`true` if successfully reset, otherwise `false`.

***

<a id="setweather"></a>

### SetWeather()

> **SetWeather**(`weather`, `blendTime?`, `priority?`): `boolean`

Defined in: game.d.ts:454

Commands the environment engine manager to override active weather profiles.

#### Parameters

##### weather

[`EWeatherState`](/reference/client/api/enums/eweatherstate/)

The weather enum state or specific profile asset name path string.

##### blendTime?

`number`

Optional transition timeline sequence parameter in seconds.

##### priority?

`number`

Optional overlay layer sorting stack index weight level identifier.

#### Returns

`boolean`

`true` if weather override commands executed, otherwise `false`.
