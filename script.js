document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  let tasks = [];

  // Render tasks in the list
  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = 'task-item';

      const taskText = document.createElement('p');
      taskText.className = 'task-text';
      taskText.textContent = task;

      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'task-actions';

      // Edit button
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => {
        const newTask = prompt('Edit your task:', task);
        if (newTask !== null && newTask.trim() !== '') {
          tasks[index] = newTask.trim();
          renderTasks();
        }
      });

      // Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        tasks.splice(index, 1);
        renderTasks();
      });

      actionsDiv.appendChild(editBtn);
      actionsDiv.appendChild(deleteBtn);
      li.appendChild(taskText);
      li.appendChild(actionsDiv);
      taskList.appendChild(li);
    });
  }

  // Add task on button click
  addTaskBtn.addEventListener('click', function () {
    const task = taskInput.value.trim();
    if (task !== '') {
      tasks.push(task);
      taskInput.value = '';
      renderTasks();
    }
  });

  // Add task on Enter key press
  taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTaskBtn.click();
    }
  });
});
