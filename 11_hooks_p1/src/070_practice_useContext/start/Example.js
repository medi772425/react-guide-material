import { CalcProvider } from "./context/CalcProvider";
import Input from "./components/Input";
import Select from "./components/Select";
import Result from "./components/Result";

const Example = () => {
  // const initState = {
  //   a: 1,
  //   b: 2,
  //   result: 3,
  // };

  // const [state, dispatch] = useReducer(reducer, initState);

  // const calculate = (e) => {
  //   dispatch({type: e.target.value});
  // };
  // const numChangeHandler = (e) => {
  //   dispatch({type: 'change', payload: {name: e.target.name, value: e.target.value}});
  // };
  return (
    /* 完成系のJSX */
    <CalcProvider>
      <Input name="a" />
      <Input name="b" />
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Example;
