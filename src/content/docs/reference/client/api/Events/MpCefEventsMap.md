---
editUrl: false
next: false
prev: false
title: "MpCefEventsMap"
---

Defined in: events.d.ts:126

Map containing standard event listeners bound to web context layers (Chromium Embedded Framework).

## Methods

<a id="domready"></a>

### domReady()

> **domReady**(`name`): `void`

Defined in: events.d.ts:131

Fired on `DOMContentLoaded` of each CEF frame.

#### Parameters

##### name

`string`

The frame's `window.name`.

#### Returns

`void`

***

<a id="loadingfailed"></a>

### loadingFailed()

> **loadingFailed**(`error`): `void`

Defined in: events.d.ts:137

Fired from a CEF frame on any uncaught `error` event (script errors and failed resource loads) and on any unhandled promise rejection.

#### Parameters

##### error

[`CefLoadingFailedError`](/reference/client/api/events/cefloadingfailederror/)

The comprehensive failure metadata payload context object.

#### Returns

`void`
