"use client"


import { TodoProvider } from "@/context/TodoContext";
import { useContext } from "react";

type StyleType = {
    style: string,
    complete: string,
};

const Btn = ({style,complete}: StyleType) => {
  const {handleAddTodo} = useContext(TodoProvider);
  return (
    <button type="button" className={style}
    onClick={handleAddTodo}
    >Add Todo</button>
  )
}

export default Btn