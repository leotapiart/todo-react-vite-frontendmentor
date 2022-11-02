import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="mt-6 rounded-t-md bg-white">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
