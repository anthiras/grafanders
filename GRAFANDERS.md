# Grafanders

Grafanders is a fork of Grafana 9.3.2 with a few features and modifications available through configuration options:

## Configuration section [grafanders]

### custom_stylesheet

Path to a local stylesheet, relative to the public folder. Can be used to mount in a custom stylesheet from docker.

### kiosk_mode

Set to "full" or "tv" to lock a kiosk mode. If not set, user can toggle the kiosk mode.
