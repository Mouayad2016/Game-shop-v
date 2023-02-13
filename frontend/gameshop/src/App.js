import "./App.css";
import Fotter from "./components/footer";
import Header from "./components/header";
import RotateImage from "./components/rotateImage";
import SideBar from "./components/sideBarComponent";
import Gallery from "./components/gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="page_body">
        {" "}
        <SideBar />
        <div class="page_content">
          <RotateImage />
          <Gallery />
        </div>{" "}
      </div>{" "}
      <Fotter />
    </div>
  );
}

export default App;
