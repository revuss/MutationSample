import React, { useCallback } from "react";
import { Todo } from "../../reducers/todoReducer";
import { useTodoContext } from "../../context/TodoContext";
import { Button } from "../ui/button";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { dispatch } = useTodoContext();

  const toggleTodo = useCallback(() => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  }, [dispatch, todo.id]);

  const removeTodo = useCallback(() => {
    dispatch({ type: "REMOVE_TODO", payload: todo.id });
  }, [dispatch, todo.id]);

  return (
    <div className="h-auto space-x-10 justify-between align-center space-y-10 ">
      <input type="checkbox" checked={todo.completed} onChange={toggleTodo} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <Button onClick={removeTodo}>Delete</Button>
    </div>
  );
};

export default TodoItem;
