import { TodoProvider } from "@/context/TodoContext"
import { useContext } from "react"

type CompleteType = {
  complete: string,
  id: number
}

const CompleteBtn = ({complete, id}: CompleteType) => {
  const {handleComplete} = useContext(TodoProvider);
  return (
    <button className="rounded bg-cyan-400 px-9 py-1 text-white"
    onClick={()=>handleComplete(id)}
    >
      {complete}
    </button>
  )
}

export default CompleteBtn
