import "./App.css";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gallery from "./components/gallery/Gallery";
import HeaderHome from "./components/HeaderHome";
import Search from "./components/Search";
import PopupDialog from "./components/popUp/popUp";
/* this is the front page so if you don't want it to apear on the front page dont put it here*/

function App() {
  useEffect(() => {
    console.log("loading");
    const searchParams = new URLSearchParams(window.location.search);
    const email = searchParams.get("email");
    const firstName = searchParams.get("first_name");
    const lastName = searchParams.get("last_name");
    const user_id = searchParams.get("id");
    if (email && firstName && lastName && user_id) {
      document.cookie = `email=${email}; path=/;`;
      document.cookie = `firstName=${firstName}; path=/;`;
      document.cookie = `lastName=${lastName}; path=/;`;
      document.cookie = `user_id=${user_id}; path=/;`;
    }
  });

  return (
    <div className="App">
      <HeaderHome />
      <Search />
      <Banner />
      <PopupDialog />
      <Gallery />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
