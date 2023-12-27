let list = document.getElementById("task-list");

function addTask() {
    let task = document.getElementById("taskName").value;
    let date = document.getElementById("date").value;
    
    list.innerHTML += `<li>${task}</li>`;
    /*
    document.getElementById("taskName").value = "";
    document.getElementById("date").value = "";
    */
}