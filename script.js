$(document).ready(function() {
    // Function to update the task counter
    function updateCounter() {
        const count = $('#taskList li').length; // Count the number of tasks
        $('#taskCounter').text(count); // Update the counter display
    }

    // Initial counter update
    updateCounter();

    $('#addButton').click(function() {
        const taskInput = $('#taskInput');
        const taskText = taskInput.val();
        if (taskText !== "") {
            $('#taskList').append(`
                <li>
                    <span class="task-text">${taskText}</span>
                    <button class="edit">Edit</button>
                    <button class='delete'>Delete</button>
                </li>
            `);

            // Update the counter after adding a task
            updateCounter();

            $('#taskList').on('click', '.edit', function() {
                
                let textToEdit = $(this).siblings('.task-text').text()
                $('#taskInput').val(textToEdit)
                
                $(this).parent().fadeOut(200, function() {
                    $(this).remove();
                    updateCounter();
                });
                

                console.log(textToEdit)
            })

            $('#taskList').on('click', '.delete', function() {
                $(this).parent().fadeOut(2000, function() {
                    $(this).remove();
                    // Update the counter after removing a task
                    updateCounter();
                });
            });

            taskInput.val(''); // Clear the input field
        } else {
            alert('Please Enter a task!');
        }
    });
});
