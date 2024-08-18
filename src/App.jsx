import TodoApp from "./components/TodoApp";
import TodoList from "./components/TodoList";

// Function to get the formatted date
const getFormattedDate = () => {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
function App() {
  const projectName = getFormattedDate();
  const projectTitle = "TodoList App";
  return (
    <>
      <TodoApp projectName={projectName} projectTitle={projectTitle}>
        <TodoList />
      </TodoApp>
    </>
  );
}

export default App;
