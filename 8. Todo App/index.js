const taskContainer = document.querySelector(".task_container");

class MyApp {
  todos = [];

  async initializeApp() {
    let stored_data = JSON.parse(localStorage.getItem("stored_todos"));
    if (stored_data && stored_data != undefined) {
      this.todos = stored_data;
      this.renderTodos(stored_data);
    } else {
      await this.fetchTodos();
    }
  }

  fetchTodos = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const res = await result.json();

      this.todos = res;

      localStorage.setItem("stored_todos", JSON.stringify(res));

      this.renderTodos(res);
    } catch {}
  };

  renderTodos = (data_todos) => {
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
    <span class="delete" id=${todo.id}>
      <svg
        
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
  };

  /*addTodo = async (data) => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    const todo = await result.json();

    this.todos.unshift(data);
    localStorage.setItem("stored_todos", JSON.stringify(this.todos));
    this.renderTodos(this.todos);
    this.close_open_Form();
  };*/

  //completed from api
  checkCompleted() {
    const checkboxes = document.getElementsByClassName("checkbox");

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].getAttribute("data-completed-status") != "false") {
        checkboxes[i].checked = true;
      }
    }
  }
  create = () => {
    let title_input = document.querySelector(".title_input").value;
    const id = Math.ceil(Math.random() * 100000000);

    const created_todo = {
      id,
      user: 21,
      title: title_input,
      completed: "false",
    };

    this.todos.unshift(created_todo);
    localStorage.setItem("stored_todos", JSON.stringify(this.todos));
    this.renderTodos(this.todos);
    this.close_open_Form();
    //this.addTodo(created_todo);
  };

  completedTasks = () => {
    let data = JSON.parse(localStorage.getItem("stored_todos"));
    const done_tasks = data.filter((item) => item.completed === true);
    
    this.renderTodos(done_tasks);
    


  
  };
  uncompletedTasks = () => {
    let data = JSON.parse(localStorage.getItem("stored_todos"));
    const done_tasks = data.filter((item) => item.completed === false);
    this.renderTodos(done_tasks);
  };

  //close Form
  close_open_Form = () => {
    let form = document.querySelector(".form");

    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  };

  addingEventListeners = () => {
    let createbtn = document.querySelector(".create");
    let cancel_form = document.querySelector(".cancel");
    let submit_btn = document.querySelector(".submit");
    let uncompleted_btn = document.querySelector(".uncompleted");
    let productivity_btn = document.querySelector("productivity");

    createbtn.addEventListener("click", this.close_open_Form);
    cancel_form.addEventListener("click", this.close_open_Form);
    submit_btn.addEventListener("click", this.create);
    uncompleted_btn.addEventListener("click", this.uncompletedTasks);

    let delete_btns = document.querySelectorAll(".delete");
    delete_btns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        let data = JSON.parse(localStorage.getItem("stored_todos"));
        let id = btn.id;
        let filtered_items = data.filter((t) => t.id != id);

        localStorage.setItem("stored_todos", JSON.stringify(filtered_items));
        this.renderTodos(filtered_items);
      })
    );

    //checkbox events

    let checkbox_btn = document.querySelectorAll(".checkbox");
    checkbox_btn.forEach((check_btn) => {
      check_btn.addEventListener("click", () => {
        let id = check_btn.id;
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id === +id) {
            if (this.todos[i].completed === true) {
              this.todos[i].completed = false;
            } else {
              this.todos[i].completed = true;
            }
            localStorage.setItem("stored_todos", JSON.stringify(this.todos));
            this.renderTodos(this.todos);
          }
        }
      });
    });
  };
}

const app = new MyApp();
app.initializeApp();

let completed_btn = document.querySelector(".completed");
completed_btn.addEventListener("click", app.completedTasks);
