import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Topbar = () => {
  const value = useContext(ThemeContext);
  return (
    <div className={`topbar ${value.state.activeTheme}`}>
      <h1>Header</h1>
    </div>
  );
};

export default Topbar;
