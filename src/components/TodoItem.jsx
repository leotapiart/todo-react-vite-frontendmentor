import React from "react";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const classButtonSelector =
  "inline-block h-5 w-5 rounded-full border-2 flex-none items-center";

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 border-b border-b-gray-300 p-4">
      <button className={classButtonSelector}>
        <IconCheck />
      </button>
      <p className="grow text-gray-600">{title}</p>
      <button className="flex-none">
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
