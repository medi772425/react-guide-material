import "./Example.css";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Main from "./components/Main";

const Example = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default Example;
