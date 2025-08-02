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
//  Function linked to the modal that gives modal information from the data given

function openModal(taskElement) {
	selectedTask = taskElement;
	taskInput.value = taskElement.textContent;
	taskDiscriptionInput.value = taskElement.dataset.description;

	// changing modal from hidding to display
	modal.style.display = "flex";
}

// The function that closes the modal when the close button is clicked

closeModalBtn.addEventListener("click", () => {
	modal.style.display = "none";
	selectedTask = null;
});

// making sure that javascript runs after DOM is ready

document.addEventListener("DOMContentLoaded", () => {
	renderTasks(initialTasks);
});
