import React from "react";
import "./gallery.css";
import no_img from "../images/no_img.jpg";

const Gallery = () => {
    return (
        <div className="gallery">
            <div class="gallery">
                <div class="column">
                    <p>Column 1 - can someone explain how to comment this part of code ???</p>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                </div>
                <div class="column">
                    <p>Column 2</p>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                </div>
                <div class="column">
                    <p>Column 3</p>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                </div>
                <div class="column">
                    <p>Column 4</p>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                    <img class="imgGallery shrink" src={no_img} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;