import "./../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import PaypalPayement from "../components/Cart/PaypalPayement";

function Paypage() {
  const searshParams = new URLSearchParams(window.location.search);

  return (
    <div className="App">
      <Header />
      <Search />
      <PaypalPayement total={searshParams.get("total")} />
      <Footer />
    </div>
  );
}

export default Paypage;
