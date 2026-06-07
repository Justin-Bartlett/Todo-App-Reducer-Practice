import { useReducer } from "react"

function counterReducer(state, action) {
  switch (action.type) {
    case "dec": {
      return {
        counter: state.counter - 1,
      }
    }
    case "inc": {
      return {
        counter: state.counter + 1,
      }
    }
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 })
  return (
    <>
      <section>
        <h1>Counter</h1>
        <button
          onClick={() => {
            dispatch({ type: "dec" })
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "inc" })
          }}
        >
          Increment
        </button>
      </section>
      <p>{state.counter}</p>
    </>
  )
}
