import React from "react";

const TodoFilter = () => {
  return (
    <section className="container mx-auto mt-5">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4">
        <button className=" font-semibold text-gray-400 hover:text-sky-500">
          All
        </button>
        <button className=" font-semibold text-gray-400 hover:text-sky-500">
          Active
        </button>
        <button className=" font-semibold text-gray-400 hover:text-sky-500">
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
