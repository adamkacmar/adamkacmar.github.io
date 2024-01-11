document.addEventListener('DOMContentLoaded', function () {
    function removeTask(element) {
        const taskBox = element.parentNode.parentNode;
        taskBox.style.animation = 'fadeOut 0.5s ease-out';

        setTimeout(function() {
            taskBox.remove();
        }, 500);
    }
    function addNewTask() {
        const input = document.getElementById('todo_input_main');
        if (input.value.trim() !== '') {
            const newTask = document.createElement('div');
            newTask.className = 'to_do_box';
            newTask.innerHTML = `
                ${input.value}
                <div class="button_container">
                    <button class="tick_button">&#10004;</button>
                    <button class="cross_button">&#10006;</button>
                </div>
            `;

            newTask.querySelector('.tick_button').addEventListener('click', function() {
                removeTask(this);
            });
            newTask.querySelector('.cross_button').addEventListener('click', function() {
                removeTask(this);
            });

            const inputContainer = document.querySelector('.input_container');
            const mainBox = document.getElementById('main_box');
            mainBox.insertBefore(newTask, inputContainer);

            input.value = '';
        }
    }

    document.querySelectorAll('.tick_button, .cross_button').forEach(function(button) {
        button.addEventListener('click', function() {
            removeTask(this);
        });
    });

    document.getElementById('confirm_button').addEventListener('click', addNewTask);

    document.getElementById('todo_input_main').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addNewTask();
        }
    });
});