import { TodoProvider } from "@/context/TodoContext";
import AddTodo from "./Protected/AddTodo";
import TodoList from "./Protected/TodoList";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <>
      <TodoProvider>
        <div className=" h-[50vh] flex flex-col mx-auto justify-center text-center align-center">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
        <Button>Logout</Button>
      </TodoProvider>
    </>
  );
};

export default Home;
