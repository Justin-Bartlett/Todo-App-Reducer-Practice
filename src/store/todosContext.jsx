import { createContext, useReducer } from "react"

export const TodosContext = createContext({
  todos: [],
  addNewTodo: () => {},
  removeTodo: () => {},
  isCompletedChange: () => {},
})

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload, ...todos]
    case "COMPLETED_CHANGE":
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted }
        } else {
          return todo
        }
      })
    default:
      return todos
  }
}

export default function TodosContextProvider({ children }) {
  const [todos, todosDispatch] = useReducer(todosReducer, [])

  function handleAddNewTodo(id, todo, isCompleted) {
    console.log(todo, id)
    todosDispatch({
      type: "ADD_TODO",
      payload: {
        id,
        task: todo,
        isCompleted,
      },
    })
  }

  function handleIsCompletedChange(id) {
    todosDispatch({
      type: "COMPLETED_CHANGE",
      payload: id,
    })
  }

  function removeTodo(id) {
    // setTodos
  }

  const ctxValue = {
    todos: todos,
    addNewTodo: handleAddNewTodo,
    removeTodo,
    isCompletedChange: handleIsCompletedChange,
  }

  return (
    <TodosContext.Provider value={ctxValue}>{children}</TodosContext.Provider>
  )
}
