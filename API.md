# Kenosha Parks API

The API is simply a wrapper around Google's Calendar API, but only specific routes.

Since the API wraps around Google's API, all optional query parameters can be passed in.

All routes are prefixed with `/api`.

## Calendars Resource

| HTTP Method	| URL			           | Description                     | Reference               |
|:-------------:|:-------------------------|:--------------------------------|:------------------------|
| `GET`      	| `/calendars/:calendarId` | Returns metadata for a calendar.| [Calendars: get][c:get] |


## Events Resource

| HTTP Method	| URL			                           | Description                               | Reference               |
|:-------------:|:-----------------------------------------|:------------------------------------------|:------------------------|
| `GET`      	| `/calendars/:calendarId/events`          | Returns events on the specified calendar. | [Events: list][e:list]  |
| `GET`      	| `/calendars/:calendarId/events/:eventId` | Returns an event.                         | [Events: get][e:get]    |

## Files Resource

| HTTP Method	| URL			         | Description                              | Reference           |
|:-------------:|:-----------------------|:-----------------------------------------|:--------------------|
| `GET`      	| `/drive/files/:fileId` | Gets a file's metadata or content by ID. | [Files: get][f:get] |

By default, this endpoint will return a [Files Resource](https://developers.google.com/drive/v3/reference/files#resource). Set the `alt` parameter to `media` if you need the actual resource.

## Notifications Resource

This resource is protected and requires a valid [Firebase ID token](https://firebase.google.com/docs/auth/admin/verify-id-tokens#retrieve_id_tokens_on_clients):

* Header: `Authorization: Bearer token`
* Query string: `access_token=token`

| HTTP Method	| URL			           | Description                                    | Reference                    |
|:-------------:|:-------------------------|:-----------------------------------------------|:-----------------------------|
| `POST`      	| `/notification`          | Send a push notification to the `alerts` topic.| [Admin: Send to a topic][pn] |

[c:get]: https://developers.google.com/google-apps/calendar/v3/reference/calendars/get
[e:list]: https://developers.google.com/google-apps/calendar/v3/reference/events/list
[e:get]: https://developers.google.com/google-apps/calendar/v3/reference/events/get
[f:get]: https://developers.google.com/drive/v3/reference/files/get
[pn]: https://firebase.google.com/docs/cloud-messaging/admin/send-messages#send_to_a_topic
