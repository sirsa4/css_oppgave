"use client"

import Btn from "./Btn"

const Form = () => {
  return (
    <>
    <form className="w-full flex flex-col gap-4 text- ">
        <div className="flex flex-col gap-1">
            <label htmlFor="title" className="font-bold">Title</label>
            <input type="text" name="title" id="title" className="w-1/2 h-10 border border-solid border-gray-900 rounded" />
        </div>
        <div className="flex flex-col gap-4">
            <label htmlFor="content" className="font-bold">Content</label>
            <textarea name="content" id="content" cols={30} rows={10} className="w-1/2 border border-solid border-gray-900 rounded"></textarea>
        </div>
        <div className="w-1/2 flex justify-end">
            <Btn style="py-1 px-9 bg-cyan-400 text-white rounded" />
        </div>
    </form>
    </>
  )
}

export default Form
