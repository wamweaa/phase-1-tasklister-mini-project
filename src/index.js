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
      const taskPriority = document.getElementById("task-priority").value;
      
      if (taskDescription.trim() !== "") {
          const taskItem = document.createElement("li");
          taskItem.textContent = taskDescription;
          taskItem.style.color = getColorByPriority(taskPriority);
          
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "❌";
          deleteBtn.classList.add("delete-btn");
          deleteBtn.onclick = function() {
              taskItem.remove();
          };
          
          taskItem.appendChild(deleteBtn);
          taskList.appendChild(taskItem);
          taskInput.value = "";
      } else {
          alert("Please enter a task description.");
      }
  });
  
  function getColorByPriority(priority) {
      switch(priority) {
          case "high":
              return "red";
          case "medium":
              return "yellow";
          case "low":
              return "green";
          default:
              return "black";
      }
  }
});

