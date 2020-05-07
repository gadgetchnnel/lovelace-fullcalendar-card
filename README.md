## Introduction

This is a custom Lovelace card which allows you to display a calendar of events from your calendars and other entities in Home Assistant, using the fullcalendar.io calendar library.

### Configuration

```yaml
type: 'custom:fullcalendar-card'
entities:
  - entity: calendar.home_calendar
    eventColor: green
  - entity: calendar.work_calendar
  - entity: sensor.next_meeting
    eventColor: orange
  - entity: sensor.bin_collection
    eventColor: grey
    time_list_attribute: bin_dates
```
