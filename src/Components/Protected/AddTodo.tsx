import React, { useState, useCallback } from "react";
import { useTodoContext } from "../../context/TodoContext";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodoContext();

  const handleAddTodo = useCallback(() => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  }, [text, dispatch]);

  return (
    <div className="flex h-auto align-center justify-center space-x-10 my-10">
      <Input
        className=" px-2 w-[50%] py-5"
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        name="email"
        placeholder="Task"
        autoComplete="NA"
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
    </div>
  );
};

export default AddTodo;
