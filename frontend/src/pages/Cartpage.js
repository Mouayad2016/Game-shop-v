import './../App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Search from '../components/Search';
import ShoppingCart from '../components/Cart/ShoppingCart';


function CartPage() {
  return (
    <div className="App">
      <Header />
      <Search/>
      <Banner/>
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default CartPage;
