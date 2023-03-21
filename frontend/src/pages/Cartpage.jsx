import "./../App.css";
import "./Cartpage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import ShoppingCart from "../components/Cart/ShoppingCart";

function CartPage() {
  return (
    <div className="App">
      <Header />
      <Search />
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default CartPage;
