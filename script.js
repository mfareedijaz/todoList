let writeTodo = document.getElementById("writeTodo");
let unorderedTodoList = document.getElementById("unorderedTodoList");
let todoAddButton = document.getElementById("todoAddButton");

todoAddButton.addEventListener("click", (event) => {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let i = document.createElement("i");

  li.classList.add("todolist");
  // li.setAttribute("draggable","true");
  span.innerText = writeTodo.value;
  
  i.classList.add("fas");
  i.classList.add("fa-times");
  i.classList.add("deleteTodoItem");
  i.classList.add("deleteTodoItem:hover");

  li.appendChild(span);
  li.appendChild(i);

  unorderedTodoList.appendChild(li);

  writeTodo.value = "";
});

unorderedTodoList.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.nodeName === "SPAN")
  {
    event.target.classList.toggle("doneTodoList");
  }
  if (event.target.classList[0] === "fas") {
    event.target.parentNode.remove();
  }
});

new Sortable (unorderedTodoList, {
  animation: 350,
})