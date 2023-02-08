import "./App.css";
import Fotter from "./components/footer";
import Header from "./components/header";
import RotateImage from "./components/rotateImage";
import SideBar from "./components/sideBarComponent";

const items = [1, 1, 1];

function App() {
  return (
    <div className="App">
      <Header />
      <div class="page_body">
        {" "}
        <SideBar /> <RotateImage />
      </div>{" "}
      <Fotter />
    </div>
  );
}

export default App;
