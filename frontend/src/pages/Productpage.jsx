import "./../App.css";
import "./Cartpage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductPage from "../components/ProductPage";
import { useLocation } from "react-router-dom";

function Productpage() {
  const location = useLocation();
  const id = location.state?.id;
  return (
    <div className="App">
      <Header />
      <ProductPage prodId={id} />
      <Footer />
    </div>
  );
}

export default Productpage;
