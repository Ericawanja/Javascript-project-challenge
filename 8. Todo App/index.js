const taskContainer = document.querySelector(".task_container");

const fetchTodos = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await result.json();

  return todos;
};

// (async ()=>{
//     console.log(await fetchTodos());
// })()

// fetchTodos()
//   .then(console.log)
//   .catch((err) => {
//     console.log({ err });
//   });

const main = async () => {
  try {
    let myTodos = await fetchTodos();
    console.log("MY TODOS", myTodos);
    // Show them to UI
  } catch (error) {
    console.log({error});
  }

  
};

main()


