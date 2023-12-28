let list = document.getElementById("task-list");
// document.querySelectorAll("span").addEventListener('click', deleteTask(e));
document.getElementById("task-list").addEventListener("click", function(e) {
    deleteTask(e);
});

function addTask() {
    let task = document.getElementById("taskName").value;
    let date = document.getElementById("date").value;
    
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


    /*
    document.getElementById("taskName").value = "";
    document.getElementById("date").value = "";
    */
}

function deleteTask(e) {       
    if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
    else if((e.target.tagName === "IMG") || (e.target.tagName === "DIV") || (e.target.tagName === "H4"))
    {
        if(e.target.tagName === "IMG")
        {
            if(e.target.src.includes("images/unchecked.png"))
            {
                e.target.src = "images/checked-circle.svg";
            }
            else
            {
                e.target.src = "images/unchecked.png";
            }
            
            e.target.nextElementSibling.classList.toggle("checked");
            e.target.nextElementSibling.nextElementSibling.classList.toggle("checked")
        }
        else if(e.target.parentElement.nextElementSibling.tagName === "DIV")
        {
            if(e.target.parentElement.previousElementSibling.src.includes("images/unchecked.png"))
            {
                e.target.parentElement.previousElementSibling.src = "images/checked-circle.svg";
            }
            else
            {
                e.target.parentElement.previousElementSibling.src = "images/unchecked.png";
            }

            e.target.parentElement.classList.toggle("checked");
            e.target.parentElement.nextElementSibling.classList.toggle("checked");
        }
        else
        {
            if(e.target.parentElement.previousElementSibling.previousElementSibling.src.includes("images/unchecked.png"))
            {
                e.target.parentElement.previousElementSibling.previousElementSibling.src = "images/checked-circle.svg";
            }
            else
            {
                e.target.parentElement.previousElementSibling.previousElementSibling.src = "images/unchecked.png";
            }

            e.target.parentElement.classList.toggle("checked");
            e.target.parentElement.previousElementSibling.classList.toggle("checked");
        }
    }

}