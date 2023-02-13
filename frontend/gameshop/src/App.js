import "./App.css";
import Fotter from "./components/footer";
import Header from "./components/header";
import RotateImage from "./components/rotateImage";
import SideBar from "./components/sideBarComponent";
import Gallery from "./components/gallery";
import MainBanner from "./components/pageMian";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="page_body">
        <MainBanner /> {/* <SideBar />  */} {/* <RotateImage /> */}{" "}
        {/* <Gallery /> */} {/* <SideBar /> */} {/* <SideBar /> */}{" "}
      </div>{" "}
      <Fotter />
    </div>
  );
}

export default App;
