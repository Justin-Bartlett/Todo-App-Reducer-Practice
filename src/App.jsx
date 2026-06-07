import Counter3 from "./components/Counter3"
import TodoList from "./components/TodoList"

import TodosContextProvider from "./store/todosContext"

function App() {
  return (
    <TodosContextProvider>
      <Counter3 />
      <main className="content">
        <TodoList />
      </main>
    </TodosContextProvider>
  )
}

export default App
