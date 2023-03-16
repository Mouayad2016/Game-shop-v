import './../App.css';
import './Cartpage.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Order from '../components/Order';


function Orderpage() {
  return (
    <div className="App">
      <Header />
      <Order />
      <Footer />
    </div>
  );
}

export default Orderpage;
