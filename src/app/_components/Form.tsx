"use client"

import { useContext } from "react"
import Btn from "./Btn"
import { TodoProvider } from "@/context/TodoContext"

const Form = () => {
  const {title, text, getTitle, getText, handleAddTodo,handleComplete} = useContext(TodoProvider);
  return (
    <>
    <form className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-1">
            <label htmlFor="title" className="font-bold">Title</label>
            <input type="text" name="title" id="title" className="md:w-1/2 h-10 border border-solid border-gray-900 rounded"
              value={title}
              onChange={getTitle}
             />
        </div>
        <div className="flex flex-col gap-4">
            <label htmlFor="content" className="font-bold">Content</label>
            <textarea name="content" id="content" cols={30} rows={10} className="md:w-1/2 border border-solid border-gray-900 rounded"
            value={text}
            onChange={getText}
            ></textarea>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
            <Btn style="py-1 px-9 bg-cyan-400 text-white rounded" />
        </div>
    </form>
    </>
  )
}

export default Form
