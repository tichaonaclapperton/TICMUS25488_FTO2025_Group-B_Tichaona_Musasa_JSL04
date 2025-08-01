import {initialTasks} from './initialData.js'

// *****getting hold of the modal part through their IDs*******

let selectedTask = null;
const modal = document.getElementById("modal");
const taskInput = document.getElementById("taskTitleInput");
const taskDiscriptionInput = document.getElementById('taskDescriptionInput');
const closeModalBtn = document.getElementById("close-modal");


