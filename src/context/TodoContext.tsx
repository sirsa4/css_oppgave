import {
  ChangeEvent,
  createContext,
  ReactNode,
  useReducer,
  useState,
} from "react"

export type TodoType = {
  title: string
  text: string
  id: number
  isComplete: boolean
}

type ContextType = {
  title: string,
  setTitle: () => string,
  text: string,
  todos: TodoType,
  setText: ()=> string,
  getTitle: ()=> void,
  getText: ()=> void,
  handleAddTodo: ()=> void,
  handleComplete: () => void
}

export const TodoProvider = createContext<ContextType>(null)


type TodoAction =
  | { type: "add"; title: string; text: string; id: number }
  | { type: "complete"; id: number }

const initTodos: TodoType[] = [
  {
    title: "todo 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum quas qui! Ipsa, nihil vero.",
    id: 0,
    isComplete: false,
  },
  { title: "todo 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum quas qui! Ipsa, nihil vero", id: 1, isComplete: false },
  { title: "todo 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum quas qui! Ipsa, nihil vero", id: 2, isComplete: false },
  { title: "todo 4", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum quas qui! Ipsa, nihil vero", id: 3, isComplete: false },
  { title: "todo 5", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum quas qui! Ipsa, nihil vero", id: 4, isComplete: false },
  { title: "todo 6", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum quas qui! Ipsa, nihil vero", id: 5, isComplete: false },
]

const todoReducer = (state: TodoType, action: TodoAction) => {
  switch (action.type) {
    case "add":
      // console.log(state.title)

      const newTodo: TodoType = {
        title: action.title,
        text: action.text,
        id: action.id,
        isComplete: false,
      }
      return [...state, newTodo]
    case "complete":
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, isComplete: !todo.isComplete } // Toggle isComplete
          : todo,
      )
    default:
      return state
  }
}

const TodoContext = ({ children }: { children: ReactNode }) => {
  const [todos, todosDispatch] = useReducer(todoReducer, initTodos)

  const [title, setTitle] = useState<string>("")
  const [text, setText] = useState<string>("")

  const getTitle = (e: ChangeEvent): void => {
    setTitle(e.target.value)
  }
  const getText = (e: ChangeEvent): void => {
    setText(e.target.value)
  }

  const handleAddTodo = (e: ChangeEvent) => {
    if(text !== "" && title !== "") { 
    const uniqueId = Date.now()
    console.log(uniqueId)
    todosDispatch({ type: "add", title: title, text: text, id: uniqueId })
    setTitle("")
    setText("")
    }
    alert("Write a title and text pls")
  }

  const handleComplete = (currentID: number): void => {
    todosDispatch({ type: "complete", id: currentID })
  }

  return (
    <>
      <TodoProvider.Provider value={{ todos, todosDispatch, title,setTitle,text,setText,
      getTitle,getText,handleAddTodo,handleComplete
      }}>
        {children}
      </TodoProvider.Provider>
    </>
  )
}

export default TodoContext
