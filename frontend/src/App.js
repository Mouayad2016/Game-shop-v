import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import LearnMore from './components/LearnMore';
import Search from './components/Search';
import SignIn from './components/SignIn';
import Suggestion from './components/Suggestion';
import ProductPage from './components/ProductPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Search/>
      <Banner/>
      <Gallery />
      <ProductPage/>{/*just so that we can see it now will be moved later*/}
      <AboutUs/>
      <ContactInfo/>
      <LearnMore/>
      {/*<SignIn/>*/}
      <Footer />
    </div>
  );
}

export default App;
