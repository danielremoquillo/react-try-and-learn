import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import TodoTabs from "./TodoTabs";
import EmptyIcon from "../assets/empty-state.svg?react";
import { Alert } from "@material-tailwind/react";
import AddIcon from "../assets/add.svg?react";

const TodoList = () => {
  // State for the todo input
  const [todo, setTodo] = useState("");
  const [submittedTodoList, setSubmittedTodoList] = useState([]);
  const [doneTodoList, setDoneTodoList] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Handles the done state of the todo item
  const doneTodoListHandler = (id) => {
    const item = submittedTodoList.find((item) => item.id === id);
    item.done = !item.done;

    setDoneTodoList([item, ...doneTodoList]);

    removeTodoHandler(id, submittedTodoList, setSubmittedTodoList);
  };

  //Handles the submission of the todo item
  const submitHandler = (e) => {
    e.preventDefault();

    if (e.target.todo.value !== "") {
      const newTodo = {
        id: uuidv4(),
        todo: todo,
        done: false,
        index: 0,
      };

      //Update the index of the todo item
      submittedTodoList.map((item) => {
        item.index = item.index + 1;
      });

      setSubmittedTodoList([newTodo, ...submittedTodoList]);
      //Reset todo
      setTodo("");
    }
  };

  //Handles the update of the todo item
  const updateTodoHandler = (id, todo, done, index) => {
    const updatedTodo = {
      id: id,
      todo: todo,
      done: false,
      index: index,
    };
    submittedTodoList.splice(index, 0, updatedTodo);

    setSubmittedTodoList(submittedTodoList);

    removeTodoHandler(id, doneTodoList, setDoneTodoList);
  };

  //Handles the removal of the todo item
  const removeTodoHandler = (id, todoList, setTodoList) => {
    //Filter out the todo item with the id
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };
  const formatCurrentDate = () => {
    const date = new Date(Date.now());

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    const formattedMinutes = minutes.toString().padStart(2, "0"); // Ensure minutes are always two digits

    const timeString = `Created at ${formattedHours}:${formattedMinutes} ${ampm}`;
    const dateString = date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    return `${timeString} - ${dateString}`;
  };
  const getActiveTodoContent = () => {
    if (!submittedTodoList || submittedTodoList.length === 0) {
      return (
        <div className="w-full flex flex-col justify-center items-center text-md md:text-lg font-medium text-primary-50 py-12">
          <EmptyIcon className="size-64 md:size-96" />
          <span className="mt-4">There is no active task yet.</span>
        </div>
      );
    }
    return (
      <>
        {submittedTodoList.map((item) => (
          <TodoItem
            key={item.id}
            todo={item.todo}
            done={item.done}
            date={formatCurrentDate()}
            onDone={() => doneTodoListHandler(item.id)}
            onRemove={() =>
              removeTodoHandler(
                item.id,
                submittedTodoList,
                setSubmittedTodoList
              )
            }
          />
        ))}
      </>
    );
  };
  const getCompletedTodoContent = () => {
    if (!doneTodoList || doneTodoList.length === 0) {
      return (
        <div className="w-full flex flex-col justify-center items-center text-md md:text-lg font-medium text-primary-50 py-12">
          <EmptyIcon className="size-64 md:size-96" />
          <span className="mt-4">There is no completed task yet.</span>
        </div>
      );
    }
    return (
      <>
        {doneTodoList.map((item) => (
          <TodoItem
            key={item.id}
            todo={item.todo}
            done={item.done}
            date={formatCurrentDate()}
            onUpdate={() =>
              updateTodoHandler(item.id, item.todo, item.done, item.index)
            }
            onRemove={() =>
              removeTodoHandler(item.id, doneTodoList, setDoneTodoList)
            }
          />
        ))}
      </>
    );
  };

  const getCombinedTodoContent = () => {
    if (
      (!doneTodoList || doneTodoList.length === 0) &&
      (!submittedTodoList || submittedTodoList.length === 0)
    ) {
      return (
        <div className="w-full flex flex-col justify-center items-center text-md md:text-lg font-medium text-primary-50 py-12">
          <EmptyIcon className="size-64 md:size-96" />
          <span className="mt-4">There is no tasks yet.</span>
        </div>
      );
    }
    return (
      <>
        {submittedTodoList.map((item) => (
          <TodoItem
            key={item.id}
            todo={item.todo}
            done={item.done}
            date={formatCurrentDate()}
            onDone={() => doneTodoListHandler(item.id)}
            onRemove={() =>
              removeTodoHandler(
                item.id,
                submittedTodoList,
                setSubmittedTodoList
              )
            }
          />
        ))}
        {doneTodoList.map((item) => (
          <TodoItem
            key={item.id}
            todo={item.todo}
            done={item.done}
            date={formatCurrentDate()}
            onUpdate={() =>
              updateTodoHandler(item.id, item.todo, item.done, item.index)
            }
            onRemove={() =>
              removeTodoHandler(item.id, doneTodoList, setDoneTodoList)
            }
          />
        ))}
      </>
    );
  };

  //Render the todo list
  return (
    <>
      <div className="py-4">
        <form onSubmit={submitHandler} className="flex justify-between">
          <input
            type="text"
            name="todo"
            placeholder="Enter new todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            className="flex-1 mr-2  text-sm md:text-base text-primary border  border-primary-25 placeholder-primary-50 rounded-lg px-4 py-1 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            data-ripple-light="true"
            className=" text-white bg-primary
            flex items-center py-3 pr-4 pl-5 cursor-pointer focus:outline-none  hover:bg-primary-200 rounded-lg"
          >
            <AddIcon className="w-5 h-5 mr-2 fill-white" />

            <span className="text-sm md:text-base"> Add todo</span>
          </button>
        </form>
      </div>
      <div className="flex justify-start items-start">
        <TodoTabs
          all={getCombinedTodoContent()}
          done={getCompletedTodoContent()}
          active={getActiveTodoContent()}
        />
      </div>
      {isSubmitted && (
        <Alert color="blue">An info alert for showing message.</Alert>
      )}
    </>
  );
};

export default TodoList;
