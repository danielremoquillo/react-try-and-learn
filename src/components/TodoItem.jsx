import React from "react";
import RemoveIcon from "../assets/trash-xmark.svg?react";
const TodoItem = ({ todo, done, onDone, onUpdate, onRemove, date }) => {
  return (
    <div
      id="ripple-on"
      className={`flex justify-between py-4 px-4 border border-primary-25  mt-2 rounded-xl ${
        done && "bg-primary-10"
      } `}
    >
      <div class="inline-flex items-center">
        <label
          class="relative flex items-center p-3 rounded-full cursor-pointer"
          htmlFor="ripple-on"
          data-ripple-dark="true"
        >
          <input
            id="ripple-on"
            type="checkbox"
            name="check"
            checked={done}
            onChange={done ? onUpdate : onDone}
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-primary-25 before:opacity-0 before:transition-opacity  checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
          />
          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label
          class="mt-px font-light text-gray-700 cursor-pointer select-none"
          htmlFor="ripple-on"
        >
          {" "}
        </label>
        <div className={`flex flex-col justify-start items-start`}>
          <span
            className={` font-semibold text-sm md:text-base ${
              done ? "text-primary-50" : "text-primary"
            }`}
          >
            {todo}
          </span>
          <span
            className={`font-medium text-xs md:text-sm  ${
              done ? "text-primary-25" : "text-primary-50"
            }`}
          >
            {date}
          </span>
        </div>
      </div>

      <button
        id="ripple-on"
        className=" text-xs md:text-sm font-bold px-1 rounded-lg text-primary hover:text-red-300 focus:outline-none"
        s
        onClick={onRemove}
      >
        <RemoveIcon className="size-4 md:size-5 fill-current" />
      </button>
    </div>
  );
};

export default TodoItem;
