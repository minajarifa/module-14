import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <div className="my-10">

      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}
export default App;
