# Vue Router Issue

## Passing

`http://localhost:5173/log/log_123`

## Failing

`http://localhost:5173/log/log.123`

## Details

According to the Vue Router [Documentation](https://router.vuejs.org/guide/essentials/route-matching-syntax.html) all route params are matched via `([^/]+)`

According to regex101, `log.123` should be a valid match: <https://regex101.com/r/XpgJ6A/1>
# vue-router-issue
