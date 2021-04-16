import { useContext } from "react";
import { ThemeContext } from "../../App";

const Footer = () => {
  const value = useContext(ThemeContext);
  return (
    <div className={`footer ${value.state.activeTheme}`}>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
