const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(item => {
    item.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(item => {
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("drop", drop);
});

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);

}

function dragEnter(event) {
    event.target.classList.add("droppable-hover");
}

function dragOver(event) {
    event.preventDefault();
}

function dragLeave(event) {
    event.target.classList.remove("droppable-hover");
}

function drop(event) {
    event.preventDefault();
    const draggableElementData = event.dataTransfer.getData("text");
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    if (draggableElementData === droppableElementData) {
        event.target.classList.add("dropped");
        const draggableElement = document.getElementById(draggableElementData);
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
        event.target.insertAdjacentHTML("afterbegin", '<img class=" ${draggableElementData}"></img>');
    } else {
        event.target.classList.remove("droppable-hover");
    }
}