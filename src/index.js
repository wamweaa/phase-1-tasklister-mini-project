document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("task-list");

  form.addEventListener("submit", function(event) {
      event.preventDefault();
      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value;
      
      if (taskDescription.trim() !== "") {
          const taskItem = document.createElement("li");
          taskItem.textContent = taskDescription;
          taskList.appendChild(taskItem);
          taskInput.value = "";
      } else {
          alert("Please enter a task description.");
      }
  });
});
