var EventEmitter = require("events").EventEmitter;
var lazy = require("lazy.js");

var AppDispatcher = require("../AppDispatcher");
var AppsEvents = require("../events/AppsEvents");

function removeApps(apps, appId) {
  return lazy(apps).reject({
    id: appId
  }).value();
}

var AppsStore = lazy(EventEmitter.prototype).extend({
  // Array of apps objects recieved from the "apps/"-endpoint
  apps: [],
  // Object of the current app recieved from the "apps/[appid]"-endpoint
  currentApp: {}
}).value();

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case AppsEvents.REQUEST_APPS:
      AppsStore.apps = action.data;
      AppsStore.emit(AppsEvents.CHANGE);
      break;
    case AppsEvents.REQUEST_APPS_ERROR:
      AppsStore.emit(AppsEvents.REQUEST_APPS_ERROR, action.data.jsonBody);
      break;
    case AppsEvents.REQUEST_APP:
      AppsStore.currentApp = action.data;
      AppsStore.emit(AppsEvents.CHANGE);
      break;
    case AppsEvents.REQUEST_APP_ERROR:
      AppsStore.emit(AppsEvents.REQUEST_APP_ERROR, action.data.jsonBody);
      break;
    case AppsEvents.DELETE_APP:
      AppsStore.apps =
        removeApps(AppsStore.apps, action.appId);
      AppsStore.emit(AppsEvents.CHANGE);
      break;
    case AppsEvents.DELETE_APP_ERROR:
      AppsStore.emit(AppsEvents.DELETE_APP_ERROR, action.data.jsonBody);
      break;
  }
});

module.exports = AppsStore;
