const list = document.getElementById("task-list"); // Create reference to the div that contains the list of tasks

// Add an event listener to the list of tasks so that when it is clicked, the modifyTask() function is executed
document.getElementById("task-list").addEventListener("click", function(e) {
    modifyTask(e);
});

/* addTask() is called when the button to add a task is clicked. It retrieves the text stored in each input field when
   the "+" button is clicked, and adds the list to a running list.
*/
function addTask() {
    // Retrieve the value stored in both input fields
    const task = document.getElementById("taskName").value;
    const date = document.getElementById("date").value;
    
    // Check to see if either of the input fields have been left empty
    if((task == "") || (date == ""))
    {
        alert("You must include a task name AND a due date!"); // Alerts the user that both input fields must be filled
    }

    // If both input fields are populated, this code block executes
    else
    {
        // Add the HTML content for the task to the list
        list.innerHTML += 
        `
        <div class="task-item">
            <img src="images/unchecked.png">

            <div class="task-name">
                <h4>${task}</h4>
            </div>

            <div class = "due-date">
                <h4>${date}</h4>
            </div>

            <span>x</span>
        </div>
        `;
        
        // Clear both input fields
        document.getElementById("taskName").value = "";
        document.getElementById("date").value = "";
    }
    
}

// modifyTask() is called when the user clicks on the task-list div. It handles checking/unchecking tasks, as well as removing them
function modifyTask(e) {
    // Check to see if the user clicked on the "x" to delete the task
    if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove(); // Delete the task
    }

    // Check to see if the user clicked on any other part of the task (other than the "x")
    else if((e.target.tagName === "IMG") || (e.target.tagName === "DIV") || (e.target.tagName === "H4"))
    {
        // Check to see if the user clicked on the image of the circle
        if(e.target.tagName === "IMG")
        {
            // Check to see if the circle is unchecked
            if(e.target.src.includes("images/unchecked.png"))
            {
                e.target.src = "images/checked-circle.svg"; // Change the image to a checked circle
            }

            // Check to see if the circle is checked
            else
            {
                e.target.src = "images/unchecked.png"; // Change the image to an unchecked circle
            }
            
            // Change the class of divs containing the name and due date
            e.target.nextElementSibling.classList.toggle("checked");
            e.target.nextElementSibling.nextElementSibling.classList.toggle("checked")
        }

        // Check to see if the user clicked on the task name
        else if(e.target.parentElement.classList.contains("task-name"))
        {
            // Check to see if the circle is unchecked
            if(e.target.parentElement.previousElementSibling.src.includes("images/unchecked.png"))
            {
                e.target.parentElement.previousElementSibling.src = "images/checked-circle.svg"; // Change the image to a checked circle
            }

            // Check to see if the circle is checked
            else
            {
                e.target.parentElement.previousElementSibling.src = "images/unchecked.png"; // Change the image to an unchecked circle
            }

            // Change the class of divs containing the name and due date
            e.target.parentElement.classList.toggle("checked");
            e.target.parentElement.nextElementSibling.classList.toggle("checked");
        }

        // Check to see if the user clicked on the due date
        else if (e.target.parentElement.classList.contains("due-date"))
        {
            // Check to see if the circle is unchecked
            if(e.target.parentElement.previousElementSibling.previousElementSibling.src.includes("images/unchecked.png"))
            {
                // Change the image to a checked circle
                e.target.parentElement.previousElementSibling.previousElementSibling.src = "images/checked-circle.svg";
            }

            // Check to see if the circle is checked
            else
            {
                // Change the image to an unchecked circle
                e.target.parentElement.previousElementSibling.previousElementSibling.src = "images/unchecked.png";
            }

            // Change the class of divs containing the name and due date
            e.target.parentElement.classList.toggle("checked");
            e.target.parentElement.previousElementSibling.classList.toggle("checked");
        }

        // Check to see if the user clicked anywhere else on the task
        else
        {
            // Check to see if the circle is unchecked
            if(e.target.children[0].src.includes("images/unchecked.png"))
            {
                e.target.children[0].src = "images/checked-circle.svg"; // Change the image to a checked circle
            }

            // Check to see if the circle is checked
            else
            {
                e.target.children[0].src = "images/unchecked.png"; // Change the image to an unchecked circle
            }

            // Change the class of divs containing the name and due date
            e.target.children[1].classList.toggle("checked");
            e.target.children[2].classList.toggle("checked");
        }
    }
}