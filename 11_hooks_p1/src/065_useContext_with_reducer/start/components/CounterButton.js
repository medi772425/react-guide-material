import { useCounterDispatch } from "../context/CountContext";

const CounterButton = ({ calcType, step }) => {
  const dispatch = useCounterDispatch();

  const clickHandler = () => {
    dispatch({ type: calcType, step: step });

    // TODO ここで直接呼び出すとエラーになる。 ↑のように一度、変数定義すれば問題ない
    //      違いはなにか？
    //      参照？しているから？
    // useCounterDispatch({ type: calcType, step: step });
  };

  return (
    <button onClick={clickHandler}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;
