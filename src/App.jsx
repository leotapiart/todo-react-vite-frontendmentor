import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  { id: 1, title: "Jog around the park 3x", completed: true },
  { id: 2, title: "10 minutes meditation", completed: false },
  { id: 3, title: "Read for 1 hour", completed: false },
  { id: 4, title: "Pick up groceries", completed: false },
  { id: 5, title: "Complete Todo App on Frontend Mentor", completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-5 px-4 ">
        <TodoCreate createTodo={createTodo} />
        <TodoList todos={todos} />
        <TodoComputed />
        <TodoFilter />
      </main>
      <footer className=" mt-5 text-center font-semibold text-gray-400">
        Drag and drop to reader list
      </footer>
    </div>
  );
}

export default App;
