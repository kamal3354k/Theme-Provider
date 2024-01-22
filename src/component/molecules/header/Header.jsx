import { useThemeContext } from "../../../provider/ThemeProvider";
import { Button } from "../../atom/button/Button";
import "./style.scss";
export const Header = (props) => {
  const { toggleTheme } = useThemeContext();

  return (
    <header>
      <span></span>
      <span> Header</span>
      <Button
        className="theme-toggle"
        onClick={toggleTheme}
        className="button"
      >
        Change Theme
      </Button>
    </header>
  );
};
