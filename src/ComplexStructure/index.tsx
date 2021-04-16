import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SidebarMenu from "./Sidebar/SidebarMenu";
import "./style.css";


const ComplexStructure = () => (
  <div className="wrapper">
    <Header />
    <SidebarMenu />
    <Content />
    <Footer />
  </div>
);

export default ComplexStructure;
