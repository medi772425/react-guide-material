import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (prev, { type, payload }) => {
  switch (type) {
    case "change":
      return { ...prev, [payload.name]: payload.value };
    case CALC_OPTIONS[0]:
      return { ...prev, result: prev.a + prev.b };

    case CALC_OPTIONS[1]:
      return { ...prev, result: prev.a - prev.b };

    case CALC_OPTIONS[2]:
      return { ...prev, result: prev.a / prev.b };

    case CALC_OPTIONS[3]:
      return { ...prev, result: prev.a * prev.b };

    default:
      throw new Error();
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: parseInt(e.target.value) },
    });
  };

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((type) => {
          return (
            <option value={type} key={type}>
              {type}
            </option>
          );
        })}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
