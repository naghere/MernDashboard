import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "../pages/Calendar/Calendar";
import { SideBar } from "../components/SideBar/SideBar";
import Home from "../pages/Home/Home";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="Aplication">
          <div className="aside">
            <SideBar />
          </div>
          <div className="content-app">
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/Calendar" Component={Calendar} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
