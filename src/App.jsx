import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <div className=" ">
      <Head />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<MainContainer />} />{" "}
            <Route path="watch" element={<WatchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/**
       * Head
       * Body
       * Sidebar
       *  MenuItems
       * MainContainer
       *  ButtonList
       *  VideoContainer
       *    VideoCard
       */}
    </div>
  );
}

export default App;
