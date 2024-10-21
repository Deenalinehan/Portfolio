document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const addCategoryBtn = document.getElementById('add-category-btn');
    const newCategoryInput = document.getElementById('new-category-input');
    const categoryList = document.getElementById('category-list');

    // Toggle between Light and Dark mode
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Switch to Light Mode';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeToggle.textContent = 'Switch to Dark Mode';
        }
    });

    // Add category
    addCategoryBtn.addEventListener('click', function() {
        const categoryName = newCategoryInput.value.trim();
        if (categoryName !== '') {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category');

            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = categoryName;
            categoryDiv.appendChild(categoryTitle);

            const taskContainer = document.createElement('div');
            taskContainer.classList.add('task-container');
            
            // Task input and button for each category
            const taskInput = document.createElement('input');
            taskInput.type = 'text';
            taskInput.placeholder = 'Enter a new task...';
            taskContainer.appendChild(taskInput);

            const addTaskBtn = document.createElement('button');
            addTaskBtn.textContent = 'Add Task';
            taskContainer.appendChild(addTaskBtn);

            categoryDiv.appendChild(taskContainer);

            const taskList = document.createElement('ul');
            taskList.classList.add('task-list');
            categoryDiv.appendChild(taskList);

            categoryList.appendChild(categoryDiv);

            // Add task to the category
            addTaskBtn.addEventListener('click', function() {
                const taskText = taskInput.value.trim();
                if (taskText !== '') {
                    const taskItem = document.createElement('li');
                    const taskContent = document.createElement('span');
                    taskContent.textContent = taskText;

                    // Create checkbox for marking tasks as completed
                    const checkBox = document.createElement('input');
                    checkBox.type = 'checkbox';
                    checkBox.classList.add('check-complete');

                    // Create span for timestamp
                    const timestamp = document.createElement('span');
                    timestamp.classList.add('timestamp');
                    timestamp.textContent = '';

                    // Check off tasks and log the timestamp when completed
                    checkBox.addEventListener('change', function() {
                        if (checkBox.checked) {
                            const completionTime = new Date().toLocaleString();
                            timestamp.textContent = `Completed at: ${completionTime}`;
                            taskContent.style.textDecoration = 'line-through';
                        } else {
                            timestamp.textContent = '';
                            taskContent.style.textDecoration = 'none';
                        }
                    });

                    taskItem.appendChild(checkBox);
                    taskItem.appendChild(taskContent);
                    taskItem.appendChild(timestamp);
                    taskList.appendChild(taskItem);

                    taskInput.value = ''; // Clear input field
                }
            });

            newCategoryInput.value = ''; // Clear category input field
        }
    });
});
