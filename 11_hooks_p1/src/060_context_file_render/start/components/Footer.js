import { useThemeUpdate } from "../context/ThemeContext";

const Footer = () => {
  const setTheme = useThemeUpdate();

  console.log("フッター");

  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
