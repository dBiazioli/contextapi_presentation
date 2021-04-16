import { useContext } from "react";
import { ThemeContext } from "../../../App";

const SettingsPage = () => {
  const value = useContext(ThemeContext);
  const changeTheme = (theme: string) => {
    value.dispatch({ type: "changeTheme", payload: theme });
  };
  return (
    <div className={`content-page ${value.state.activeTheme}`}>
      <h1>Settings Page</h1>
      <button onClick={() => changeTheme("light")}>Set Light Theme</button>
      <button onClick={() => changeTheme("dark")}>Set Dark Theme</button>
    </div>
  );
};

export default SettingsPage;

