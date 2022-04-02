# Dislog

Dislog is a small package which sends over important logs to discord via webhooks.
Initialize once and send everywhere.

## Installation

Install dislog with npm

```bash
  npm install dislog
```

## API Reference

#### Initializing Dislog

```javascript
const dislog = new Dislog(webhookURL, userID);
```

| Parameter    | Type     | Description                                                                                         |
| :----------- | :------- | :-------------------------------------------------------------------------------------------------- |
| `webhookURL` | `string` | **Required**. Your discord channel webhook URL. Can be found under Channel Settings > Integrations. |
| `userID`     | `string` | **Required**. Your discord user ID. Can be found by right clicking on your profile.                 |

#### log(message)

Takes a message to be sent as a message in the discord channel.

#### alert(message)

Works similarly as log(), but also pings the specified user while initializing the library.

## Usage

```javascript
import Dislog from "dislog";

// discordUserID can be found be right-clicking on your profile.
// webhookURL can be found in channel settings under Integrations.
const dislog = new Dislog(webhookURL, discordUserID);

// Send a simple log
dislog.log("Hi, this function will log something.");

// Send a alert, will ping the user
dislog.alert("This is an alert!");
```
