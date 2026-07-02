const input = document.getElementById("taskInput");
const button = document.getElementById("addButton");
const list = document.getElementById("taskList");

button.addEventListener("click", addTask);

input.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        addTask();
    }

});

function addTask(){

    const text = input.value.trim();

    if(text === ""){
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "task";
    span.textContent = text;

    const actions = document.createElement("div");
    actions.className = "actions";

    const complete = document.createElement("button");
    complete.className = "complete";
    complete.innerHTML = "✔";

    const remove = document.createElement("button");
    remove.className = "delete";
    remove.innerHTML = "✖";

    complete.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    remove.addEventListener("click", () => {
        li.remove();
    });

    actions.appendChild(complete);
    actions.appendChild(remove);

    li.appendChild(span);
    li.appendChild(actions);

    list.appendChild(li);

    input.value = "";
    input.focus();

}