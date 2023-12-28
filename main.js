let list = document.getElementById("task-list");

function addTask() {
    let task = document.getElementById("taskName").value;
    let date = document.getElementById("date").value;
    
    list.innerHTML += 
    `
    <div class="task-item">
        <div class="unchecked-circle">
            <img src="images/unchecked.png">
        </div>        
        <div class="task-name">
            <h4>${task}</h4>
        </div>
        <div class = "due-date">
            <h4>${date}</h4>
        </div>
    </div>
    `;


    /*
    document.getElementById("taskName").value = "";
    document.getElementById("date").value = "";
    */
}