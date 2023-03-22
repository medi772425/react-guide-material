import { createContext } from "react";
import Counter from "./components/Counter";
import { CounterProvider } from "./context/CountContext";

export const stateContext = createContext();

// POINT useContext x useReducer
const Example = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Example;
