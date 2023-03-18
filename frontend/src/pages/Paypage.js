import './../App.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import PaypalPayement from '../components/Cart/PaypalPayement';


function Paypage() {
  return (
    <div className="App">
      <Header />
      <Search/>
      <PaypalPayement />
      <Footer />
    </div>
  );
}

export default Paypage;