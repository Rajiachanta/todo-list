
let todoList = [];
let todoHTML = '';



function renderTodoList() {
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div >${name}</div>
    <div >${dueDate}</div>
    <button class="delete-button js-delete-todo-button" 
    ">Delete</button>
    `;
    todoHTML += html;
  })
  //   for(let i=0; i< todoList.length; i++){
  //     const todoObject = todoList[i];
  //   //const name= todoObject.name;
  //   //const dueDate= todoObject.dueDate;
  //   const { name, dueDate } = todoObject;
  //   const html=`
  //     <div >${name}</div>
  //     <div >${dueDate}</div>
  //     <button class="delete-button" onclick="
  //       todoList.splice(${i},1);
  //       renderTodoList();
  //     ">Delete</button>`;
  //   todoHTML +=html;
  // }
  // console.log(todoHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoHTML;
  todoHTML = '';

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}



document.querySelector('.js-ad-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });
  
function addTodo() {
  const inputElement = document.querySelector(`.js-Add-button`)
  const name = inputElement.value;

  const dateInputElement = document.querySelector(`.js-due-date-input`);
  const dueDate = dateInputElement.value;
  todoList.push(
    {//name: name , dueDate: dueDate
      name, dueDate
    });
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}
