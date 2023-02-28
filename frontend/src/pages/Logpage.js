import './../App.css';
// import './Cartpage.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import Login  from '../components/Log/Login';



function LogPage() {
  return (
    <div className="App">
      <Header />
      <Search/>
      <Login />
      <Footer />
    </div>
  );
}

export default LogPage;