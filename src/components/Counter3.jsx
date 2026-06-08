import { useContext } from "react"
import { CounterContext } from "../store/counterContext"

export default function Counter3() {
  const { counter, decrementCounter, incrementCounter } =
    useContext(CounterContext)
  return (
    <>
      <section>
        <div>Counter3</div>
        <button
          onClick={() => {
            decrementCounter()
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            incrementCounter()
          }}
        >
          Increment
        </button>
      </section>
      <p>{counter}</p>
    </>
  )
}
