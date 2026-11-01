---
editUrl: false
next: false
prev: false
title: "CefLoadingFailedError"
---

> **CefLoadingFailedError** = `object`

Defined in: events.d.ts:107

Payload of `loadingFailed`. For an unhandled promise rejection only `type: 'promise_rejection'`, `frameName` and `message` are set.

## Properties

<a id="column"></a>

### column

> **column**: `number`

Defined in: events.d.ts:117

Column horizontal offset coordinate location.

***

<a id="framename"></a>

### frameName

> **frameName**: `string`

Defined in: events.d.ts:109

The name identifier of the target frame window container.

***

<a id="line"></a>

### line

> **line**: `number`

Defined in: events.d.ts:115

Line number coordinate mapping source code where compilation or loading dropped.

***

<a id="message"></a>

### message

> **message**: `string`

Defined in: events.d.ts:111

Detailed failure description or engine reason statement.

***

<a id="source"></a>

### source

> **source**: `string`

Defined in: events.d.ts:113

File path URL source location string.

***

<a id="stack"></a>

### stack

> **stack**: `string`

Defined in: events.d.ts:119

Raw interpreter trace log array stack layout details.
