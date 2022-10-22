const taskContainer = document.querySelector(".task_container");

class MyApp {
  todos = [];

  async initializeApp() {
    await this.fetchTodos();
  }

  fetchTodos = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const res = await result.json();
    this.todos = res;

    this.renderTodos();
  };

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
  };

  renderTodos() {
    const todosMarkup = this.todos
      .map(
        (todo) => `
    <div class="task">
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
  }

  checkCompleted() {
    const checkboxes = document.getElementsByClassName("checkbox");
    console.log();
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].getAttribute("data-completed-status") != "false") {
        checkboxes[i].checked = true;
      }
    }
  }

  
}

const app = new MyApp();
app.initializeApp();
