import {
  addListContainer, list, clear, warning,
} from './variables.js';
import Tasks from './class.js';

const tasks = new Tasks();

export const newActivity = addListContainer.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    if (e.target.value === '') {
      warning.innerHTML = 'Please enter a task';
      warning.classList.remove('hide');
      setTimeout(() => {
        warning.innerHTML = '';
        warning.classList.add('hide');
      }, 2000);
    } else {
      const newValue = e.target.value;
      tasks.addRecord(newValue, false, tasks.activities.length + 1);
      tasks.local();
      e.target.value = '';
    }
  }
});

export const deleteActivity = list.addEventListener('click', (e) => {
  if (e.target.tagName === 'P') {
    e.path[1].childNodes[5].classList.add('hide');
    e.path[1].childNodes[7].classList.remove('hide');
  } else if (e.target.innerHTML === 'delete') {
    const value = e.path[2].childNodes[3].innerHTML;
    tasks.eliminate(value);
  }
});

export const preventEnter = list.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

export const editActivity = list.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    const newValue = e.target.innerHTML;
    const position = e.path[1].attributes[2].value;
    tasks.replace(newValue, position);
  }
});

export const completed = list.addEventListener('click', (e) => {
  if (e.target && e.target.tagName === 'INPUT') {
    let status;
    let position;
    let data;

    if (e.target.checked) {
      status = e.target.parentNode.attributes.completed.value;
      status = true;
      data = e.target.parentNode.childNodes[3].innerHTML;
      position = e.target.parentNode.attributes[2].value;
      e.target.parentNode.classList.toggle('decoration');
      tasks.activitiesDone.push(data);
      tasks.checkMark(data, status, position);
    } else {
      status = e.target.parentNode.attributes.completed.value;
      status = false;
      data = e.target.parentNode.childNodes[3].innerHTML;
      position = e.target.parentNode.attributes[2].value;
      e.target.parentNode.classList.toggle('decoration');
      tasks.removeTemp(data);
      tasks.checkMark(data, status, position);
    }
  }
});

export const clearAll = clear.addEventListener('click', () => {
  tasks.activitiesDone = JSON.parse(localStorage.getItem('done'));
  if (tasks.activitiesDone === null) {
    tasks.activitiesDone = [];
  }
  tasks.activitiesDone.forEach((element) => tasks.eliminate(element));
  tasks.activitiesDone = [];
});

export const load = document.addEventListener('DOMContentLoaded', () => {
  tasks.updateList();
  for (let i = 0; i < tasks.activities.length; i += 1) {
    if (tasks.activities[i].completed) {
      list.children[i].classList.toggle('decoration');
      list.children[i].children[0].checked = true;
    }
  }
});