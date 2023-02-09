import React from "react";
import "./gallery.css";
import no_img from "../images/no_img.jpg";

const Gallery = () => {
    return (
        <div className="gallery">
            <img class="gallery" src={no_img} alt=""/>
            <img class="gallery" src={no_img} alt=""/>
            <img class="gallery" src={no_img} alt=""/>
            <img class="gallery" src={no_img} alt=""/>
            <img class="gallery" src={no_img} alt=""/>
            <img class="gallery" src={no_img} alt=""/>
            <img class="gallery" src={no_img} alt=""/>
            <img class="gallery" src={no_img} alt=""/>
            <img class="gallery" src={no_img} alt=""/>
            <img class="gallery" src={no_img} alt=""/>
        </div>
    );
}

export default Gallery;