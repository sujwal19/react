import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  const ChangeTheme = () => {
    setTheme("dark");
  };

  return (
    <div>
      <button onClick={ChangeTheme}>Change Theme</button>
    </div>
  );
};

export default Button;
