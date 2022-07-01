const todolist = document.getElementById("todolist");
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("ip");

function 목록추가() {
  let added = document.createElement("li");
  let addDelBtn = document.createElement("button");
  let inputValue = document.createTextNode(input.value);
  added.className = "addedBox";
  addDelBtn.innerHTML = "x";
  addDelBtn.className = "delBtn";
  added.appendChild(inputValue);
  added.appendChild(addDelBtn);
  addDelBtn.addEventListener('click', 목록삭제);
  todolist.appendChild(added);
  input.value = "";
}

function 목록삭제(event) {
  const removeOne = event.target.parentElement;
  removeOne.remove();
}
