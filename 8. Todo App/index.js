const taskContainer = document.querySelector(".task_container");

class MyApp {
  todos = [];

  async initializeApp() {
    await this.fetchTodos();
  }

  fetchTodos = async () => {
    try{
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const res = await result.json();
    
    this.todos = res;
   

    localStorage.setItem('stored_todos', JSON.stringify(res));  
    

    this.renderTodos(res);
    }catch{
      this.renderTodos(localStorage.getItem('stored_todos'))

    }

  };

  

  renderTodos = ( data_todos) =>{
   
    const todosMarkup = data_todos
      .map(
        (todo) => `
    <div class="task  " id=${todo.completed} >
    <span class="input"
      ><input
        type="checkbox"
        name="completed_status"
        id=${todo.id}
        data-completed-status=${todo.completed}
        class="checkbox"
    /></span>
    <span class="title" id=${todo.id}>${todo.title}</span>
    <span class="delete">
      <svg
        data-id="${todo.id}"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: rgba(0, 0, 0, 0.5); transform: ; msfilter: "
      >
        <path
          d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"
        ></path>
      </svg>
    </span>
  </div>
    
    `
      )
      .join("");

    taskContainer.innerHTML = todosMarkup;

    this.checkCompleted();
    this.addingEventListeners();
  }

  addTodo = async (data) => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    const todo = await result.json();

    this.todos.unshift(todo);
    localStorage.setItem('stored_todos', JSON.stringify(this.todos.unshift)); 
    this.renderTodos(this.todos)
    this.close_open_Form()
  };

  checkCompleted() {
    const checkboxes = document.getElementsByClassName("checkbox");
    console.log();
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].getAttribute("data-completed-status") != "false") {
        checkboxes[i].checked = true;
      }
    }
  }
  create = ()=> {
    let title_input = document.querySelector(".title_input").value;
    const id = Math.ceil(Math.random() * 100000000);

    const created_todo = {
      id,
      user: 21,
      title: title_input,
      completed: "false",
    };

    this.addTodo(created_todo)
  }


completedTasks = ()=>{
  let data = JSON.parse( localStorage.getItem('stored_todos'))
  const done_tasks = data.filter(item => item.completed === true)
  this.renderTodos(done_tasks)
  console.log(this.todos)

}
uncompletedTasks=()=>{
  let data = JSON.parse( localStorage.getItem('stored_todos'))
  const done_tasks = data.filter(item => item.completed === false)
  this.renderTodos(done_tasks)

}
delete =()=>{
  let data = JSON.parse( localStorage.getItem('stored_todos'))
  const remTasks = data.filter(item.id != id)
  
}


  //close Form
  close_open_Form=()=> {
    let form = document.querySelector(".form");

    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  }

  addingEventListeners=()=> {
    let createbtn = document.querySelector(".create");
    let cancel_form = document.querySelector(".cancel");
    let submit_btn = document.querySelector(".submit");
    let uncompleted_btn = document.querySelector(".uncompleted")
    let productivity_btn = document.querySelector("productivity")
    
    createbtn.addEventListener("click", this.close_open_Form);
    cancel_form.addEventListener("click", this.close_open_Form);
    submit_btn.addEventListener("click", this.create);
    uncompleted_btn.addEventListener("click", this.uncompletedTasks)
  }
}

const app = new MyApp();
app.initializeApp();

let completed_btn = document.querySelector(".completed")
completed_btn.addEventListener("click", app.completedTasks)