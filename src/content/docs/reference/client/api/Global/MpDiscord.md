---
editUrl: false
next: false
prev: false
title: "MpDiscord"
---

Defined in: discord.d.ts:1

## Methods

<a id="getcodeauthorization"></a>

### ~~getCodeAuthorization()~~

> **getCodeAuthorization**(`discordAppId`, `scopes`): `string`

Defined in: discord.d.ts:19

Requests a preferred secure authentication application code payload via Discord's authorization flow.

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

##### discordAppId

`string`

The registered client registration application client ID string.

##### scopes

`string`

Separated validation permission request keyword groups strings (e.g., `"identify guilds"`).

#### Returns

`string`

An authentication code string convertible into access tokens server-side, or an empty string while it is not received yet. The request runs in the background: poll this method; it re-requests the code at most every 5 seconds.

***

<a id="getoauth2token"></a>

### getOAuth2Token()

> **getOAuth2Token**(`discordAppId`): `string`

Defined in: discord.d.ts:10

Requests an OAuth2 access token from the running Discord client (Discord Game SDK `GetOAuth2Token`).
The request is asynchronous: the first call starts it and returns an empty string; call again later to get the token.
The runtime passes only `discordAppId` to the engine; a second `scopes` argument (declared in the types) is ignored.

#### Parameters

##### discordAppId

`string`

The Discord application ID.

#### Returns

`string`

The access token, or an empty string while it is not received yet.

***

<a id="updaterichpresence"></a>

### updateRichPresence()

> **updateRichPresence**(`state?`, `details?`): `void`

Defined in: discord.d.ts:2

#### Parameters

##### state?

`string`

##### details?

`string`

#### Returns

`void`
