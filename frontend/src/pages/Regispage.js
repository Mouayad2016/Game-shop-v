 import './../App.css';
 import './Cartpage.css';
 import Footer from '../components/Footer';
 import Header from '../components/Header';
 import Search from '../components/Search';
 import Register  from '../components/Log/Register'; /*here that was the good path */


function RegisPage() {
   return (
    <div className="App">
      <Header />
      <Search/>
      <Register />
      <Footer />
    </div>
  );
 }

 export default RegisPage;