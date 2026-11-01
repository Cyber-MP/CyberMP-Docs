---
editUrl: false
next: false
prev: false
title: "MpCef"
---

Defined in: cef.d.ts:5

Interface for managing the game's embedded Chromium Embedded Framework (CEF) web instances.
Handles display focus layer switching, mouse pointer capturing, and runtime address navigation.

## Methods

<a id="isinfocus"></a>

### isInFocus()

> **isInFocus**(): `boolean`

Defined in: cef.d.ts:17

Evaluates whether the user's input focus context is currently actively captured by the CEF interface layer.

#### Returns

`boolean`

`true` if the web view is holding input priority focus, otherwise `false`.

***

<a id="setfocus"></a>

### setFocus()

> **setFocus**(`focus`, `cursor?`): `void`

Defined in: cef.d.ts:11

Sets the interaction focus and inputs routing priority for the calling resource's CEF frame. Does nothing if the resource has no frame yet.

#### Parameters

##### focus

`boolean`

`true` to pass keyboard input focus into the web view, `false` to return focus to the game engine.

##### cursor?

`boolean`

Optional flag. `true` renders and locks the OS cursor over the game window, `false` hides it. Defaults to the value of `focus`.

#### Returns

`void`

***

<a id="seturl"></a>

### setUrl()

> **setUrl**(`url`): `void`

Defined in: cef.d.ts:23

Navigates the calling resource's CEF frame to a new URL, creating the frame if the resource has none yet.

#### Parameters

##### url

`string`

The fully qualified target URL or local asset resource file path string to render.

#### Returns

`void`
