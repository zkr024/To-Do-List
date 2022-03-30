import * as myEvents from './eventListeners.js';

const loadEvents = () => {
  myEvents.load();
  myEvents.newActivity();
  myEvents.deleteActivity();
  myEvents.preventEnter();
  myEvents.editActivity();
  myEvents.completed();
  myEvents.clearAll();
};

export default loadEvents;