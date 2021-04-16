import { useContext } from "react";
import { ThemeContext } from "../../../App";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = () => {
  const value = useContext(ThemeContext);
  return (
    <div className={`sidebar ${value.state.activeTheme}`}>
      <h1>Sidebar Menu</h1>
      <SidebarMenuItem />
      <SidebarMenuItem />
      <SidebarMenuItem />
    </div>
  );
};

export default SidebarMenu;
