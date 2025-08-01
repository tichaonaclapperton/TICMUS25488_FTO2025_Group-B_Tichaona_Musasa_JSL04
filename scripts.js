import { initialTasks } from "./initialData.js";

// *****getting hold of the modal part through their IDs*******

let selectedTask = null;
const modal = document.getElementById("modal");
const taskInput = document.getElementById("taskTitleInput");
const taskDiscriptionInput = document.getElementById("taskDescriptionInput");
const closeModalBtn = document.getElementById("close-modal");

const renderTasks = (tasks) => {
	// Clear all existing tasks
	document.querySelectorAll(".tasks-container").forEach((container) => {
		container.innerHTML = "";
	});

  // creating div element that will take the tasks
  
	tasks.forEach((task) => {
		const taskDiv = document.createElement("div");
		taskDiv.className = "task-div";
		taskDiv.textContent = task.title;
		taskDiv.dataset.description = task.description;

		// Add click listener to open modal for editing
		taskDiv.addEventListener("click", () => openModal(taskDiv));

		const container = document.querySelector(
			`.tasks-container[data-status="${task.status}"]`
		);
		if (container) container.appendChild(taskDiv);
	});
};
