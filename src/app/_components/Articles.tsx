"use client"

import Link from "next/link"

import CompleteBtn from "./CompleteBtn"
import { TodoProvider, TodoType } from "@/context/TodoContext"
import { useContext } from "react"

const Articles = () => {
  const {todos, handleComplete} = useContext(TodoProvider);
  return (
    <main className="flex flex-col">
      <h2 className="font-black">My Todos</h2>
      <section className="flex flex-col flex-grow md:grid md:grid-cols-3 gap-4 p-10">
      {todos
        ? todos.map((todo: TodoType) => {
            return (
              <article className="flex w-full flex-col flex-grow gap-4 p-4 text-center shadow-md" key={todo.id}>
                <h3 className="md:text-start font-bold">{todo.title}</h3>
                <p className="text-start">{todo.text}</p>
                
                {todo.isComplete ? (
                   <div className="flex justify-center md:justify-end">
                      <CompleteBtn complete="Completed!" id={todo.id} />
                   </div>
                ) : (
                  // <button type="button" onClick={() => handleComplete(todo.id)}>
                  //   Complete
                  // </button>
                  <div className="flex justify-center md:justify-end">
                       <CompleteBtn complete="Complete" id={todo.id} />
                  </div>
                )}
              </article>
            )
          })
        : "nothing"}
      </section>
    </main>
  )
}

export default Articles
