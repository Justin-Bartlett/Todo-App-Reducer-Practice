import { use, useRef } from "react"

import { TodosContext } from "../store/todosContext"

export default function TodoList() {
  const { addNewTodo, removeTodo, isCompletedChange, todos } = use(TodosContext)
  const todoRef = useRef("")
  let isCompleted = false

  function handleAddNewTodo() {
    const id = crypto.randomUUID()
    if (todoRef.current.value !== "") {
      addNewTodo(id, todoRef.current.value, isCompleted)
      todoRef.current.value = ""
    }
  }

  function handleIsCompletedCheckboxChange(id) {
    isCompletedChange(id)
  }

  return (
    <>
      <section className="todo-list-input">
        <h1>TodoList</h1>
        <textarea ref={todoRef} id="todo-textarea" rows="4" cols="40" />
        <button onClick={handleAddNewTodo}>Add new todo</button>
      </section>
      {todos.length > 0 && (
        <section className="todo-list">
          <ul>
            {todos.map((todo) => (
              <li
                className={todo.isCompleted ? "li-completed" : "li-todo"}
                key={todo.id}
              >
                <pre className="todo-text">{todo.task}</pre>
                {/* <pre> prints the formatting in the text  */}
                <span className={todo.isCompleted ? "completed" : "todo"}>
                  {todo.isCompleted ? "completed" : "todo"}
                </span>
                <span className="checkbox">
                  <input
                    value={isCompleted}
                    type="checkbox"
                    onChange={() => handleIsCompletedCheckboxChange(todo.id)}
                  />
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
