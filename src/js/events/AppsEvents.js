const AppsEvents = {
  CHANGE: "APPS_EVENTS_CHANGE",
  REQUEST_APPS: "APPS_EVENTS_REQUEST_APPS",
  REQUEST_APPS_ERROR: "APPS_EVENTS_REQUEST_APPS_ERROR",
  REQUEST_APP: "APPS_EVENTS_REQUEST_APP",
  REQUEST_APP_ERROR: "APPS_EVENTS_REQUEST_APP_ERROR",
  CREATE_APP: "APPS_EVENTS_CREATE_APP",
  CREATE_APP_ERROR: "APPS_EVENTS_CREATE_APP_ERROR",
  DELETE_APP: "APPS_EVENTS_DELETE_APP",
  DELETE_APP_ERROR: "APPS_EVENTS_DELETE_APP_ERROR",
  RESTART_APP: "APPS_EVENTS_RESTART_APP",
  RESTART_APP_ERROR: "APPS_EVENTS_RESTART_APP_ERROR",
  SCALE_APP: "APPS_EVENTS_SCALE_APP",
  SCALE_APP_ERROR: "APPS_EVENTS_SCALE_APP_ERROR",
  APPLY_APP: "APPS_EVENTS_APPLY_APP",
  APPLY_APP_ERROR: "APPS_EVENTS_APPLY_APP_ERROR",
  APPLY_APP_REQUEST: "APPS_EVENTS_APPLY_APP_REQUEST",
  APPS_STATUSES: "APPS_STATUSES"
};

module.exports = Object.freeze(AppsEvents);
