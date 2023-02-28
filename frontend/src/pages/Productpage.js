import './../App.css';
import './Cartpage.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductPage from '../components/ProductPage';


function Productpage() {
  return (
    <div className="App">
      <Header />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default Productpage;
