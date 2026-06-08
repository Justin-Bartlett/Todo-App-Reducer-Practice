import { createContext, use, useReducer } from "react"

export const CounterContext = createContext({
  counter: 0,
  decrementCounter: () => {},
  incrementCounter: () => {},
})

function counterReducer(counterState, action) {
  switch (action.type) {
    case "DEC": {
      return {
        counter: counterState.counter - 1,
      }
    }
    case "INC": {
      return {
        counter: counterState.counter + 1,
      }
    }
  }
}

export default function CounterContextProvider({ children }) {
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    counter: 0,
  })

  function handleDecrementCounter() {
    counterDispatch({
      type: "DEC",
    })
  }

  function handleIncrementCounter() {
    counterDispatch({
      type: "INC",
    })
  }

  const ctxValue = {
    counter: counterState.counter,
    decrementCounter: handleDecrementCounter,
    incrementCounter: handleIncrementCounter,
  }

  return (
    <CounterContext.Provider value={ctxValue}>
      {children}
    </CounterContext.Provider>
  )
}
