import { list } from './variables.js';

export default class Tasks {
  constructor() {
    this.activityData = {};
    this.activities = [];
    this.activitiesDone = [];
  }

  addRecord(activity, completed, index) {
    this.activityData = { activity, completed, index };
    this.activities.push(this.activityData);
  }

  local() {
    window.localStorage.setItem('activities', JSON.stringify(this.activities));
    this.updateList();
  }

  loadLocal() {
    window.localStorage.setItem('activities', JSON.stringify(this.activities));
  }

  doneActivities() {
    window.localStorage.setItem('done', JSON.stringify(this.activitiesDone));
  }

  updateList() {
    list.innerHTML = '';
    this.activities = JSON.parse(localStorage.getItem('activities'));
    if (this.activities === null) {
      this.activities = [];
    }
    this.activities.forEach((element) => {
      list.innerHTML += `
          <li class="activity" completed = ${element.completed} index = ${element.index}>
            <input type="checkbox" class="checkbox">
            <p class= 'toDo' contenteditable="true">${element.activity}</p>
            <a class="move">
              <span class="material-icons-outlined">more_vert</span>
            </a>
            <a class="delete hide">
              <span class="material-icons-outlined">delete</span>
            </a>
          </li>
        `;
    });
  }

  eliminate(data) {
    const indexArray = this.activities.findIndex((element) => element.activity === data);
    this.activities.splice(indexArray, 1);
    for (let i = 0; i < this.activities.length; i += 1) {
      this.activities[i].index = i + 1;
    }
    this.local();
  }

  replace(data, position) {
    position = parseInt(position, 10);
    const item = {
      activity: data,
      completed: false,
      index: position,
    };
    this.activities.splice(position - 1, 1, item);
    this.local();
  }

  checkMark(data, status, position) {
    position = parseInt(position, 10);
    const item = {
      activity: data,
      completed: status,
      index: position,
    };
    this.activities.splice(position - 1, 1, item);
    this.loadLocal();
    this.doneActivities();
  }

  removeTemp(data) {
    const indexArray = this.activitiesDone.findIndex((element) => element === data);
    this.activitiesDone.splice(indexArray, 1);
    this.doneActivities();
  }
}