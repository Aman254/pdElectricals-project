import NavBar from "./components/navBar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
const root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default root;
