import Counter3 from "./components/Counter3"
import TodoList from "./components/TodoList"
import CounterContextProvider from "./store/counterContext"

import TodosContextProvider from "./store/todosContext"

function App() {
  return (
    <main className="content">
      <CounterContextProvider>
        <Counter3 />
      </CounterContextProvider>
      <TodosContextProvider>
        <TodoList />
      </TodosContextProvider>
    </main>
  )
}

export default App
