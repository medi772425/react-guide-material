import { createContext, useContext, useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: state.a + state.b };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};

export const CalcContext = createContext();
export const CalcDispatchContext = createContext();

export const CalcProvider = ({ children }) => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CalcContext.Provider value={state}>
      <CalcDispatchContext.Provider value={dispatch}>
        {children}
      </CalcDispatchContext.Provider>
    </CalcContext.Provider>
  );
};

// TODO 関数の定義？　関数の代入ではない?
export const useCalc = () => useContext(CalcContext);
export const useCalcDispatch = () => useContext(CalcDispatchContext);
