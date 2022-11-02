import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState();

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="flex items-center gap-4 overflow-hidden rounded-md bg-white p-4"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default TodoCreate;
