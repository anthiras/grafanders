# Grafanders

Grafanders is a fork of Grafana 10.1.15 with a few modifications, and a few added features available through configuration options.

## Modifications

### Parent frame events

When the time range is changed, an event with the following structure is sent to the parent frame:

```
{
  type: 'time-range-updated',
  from: '2023-04-04T07:00:39.881Z',
  to: '2023-04-04T10:26:02.504Z'
}
```

## Configuration section [grafanders]

### custom_stylesheet

Path to a local stylesheet, relative to the public folder. Can be used to mount in a custom stylesheet from docker.

### kiosk_mode

Set to "full" or "tv" to lock a kiosk mode. If not set, user can toggle the kiosk mode.

## disable_keybindings

Set to "true" to disable keypress shortcut bindings.

## Build/publish docker image

```
make build-docker-full
docker tag anthiras/grafanders:dev anthiras/grafanders:1.0.0 # replace 1.0.0 with new version number
docker tag anthiras/grafanders:1.0.0 anthiras/grafanders:latest # replace 1.0.0 with new version number
docker push anthiras/grafanders:1.0.0 # replace 1.0.0 with new version number
docker push anthiras/grafanders:latest
```
