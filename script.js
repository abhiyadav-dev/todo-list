let store=  JSON.parse(localStorage.getItem('savedData'));
let todoList = store || [];
renderTodolist();


let inputElement = document.querySelector(".js-todo");
let dateElement = document.querySelector(".js-date");
let addbtn = document.querySelector(".js-button");
function updateButton() {
  addbtn.disabled =
    inputElement.value.trim() === "" || dateElement.value === "";
}

function addTodo() {
  const userInput = inputElement.value.trim();
  const dateInput = dateElement.value.trim();

  todoList.push({ userInput, dateInput });
  inputElement.value = "";
  dateElement.value = "";
  localStorage.setItem('savedData',JSON.stringify(todoList));
  renderTodolist();
  updateButton();


}

function renderTodolist() {
  let todoHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { userInput } = todoObject;
    const { dateInput } = todoObject;
    todoHtml += `<div class = "item-3">
  
 <div> ${userInput} </div>
  
  <div>${dateInput}</div>
 
   <div> <button
   class="del-button"
   onclick="
    todoList.splice(${i},1);

  localStorage.setItem('savedData',JSON.stringify(todoList));
    
    renderTodolist();
   "
   
   >
  Delete
  </button>
  </div>
   </div>
  `;
  }
  document.querySelector(".render-html").innerHTML = todoHtml;
}
inputElement.addEventListener("input", updateButton);
dateElement.addEventListener("input", updateButton);
updateButton();
