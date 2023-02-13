import React from "react";
import "./gallery.css";
import no_img from "../images/no_img.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const data = [
  {
    title: "This is ,e",
    text: "text",
    id: "1",
  },
  {
    title: "This is ,e",
    text: "text",
    id: "1",
  },
  {
    title: "This is ,e",
    text: "text",
    id: "1",
  },
  {
    title: "This is ,e",
    text: "text",
    id: "1",
  },
  {
    title: "This is ,e",
    text: "text",
    id: "1",
  },
  {
    title: "This is ,e",
    text: "text",
    id: "1",
  },
  {
    title: "This is ,e",
    text: "text",
    id: "1",
  },
];
const Gallery = () => {
  return (
    <div class="gallery">
      {data.map((e) => (
        <div class="main_banner_item">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="bottom"
              src={require("../images/img3.jpg")}
              height={150}
              width={150}
            />
            <Card.Body>
              <Card.Title> {e.title} </Card.Title>
              <Card.Text>{e.text} </Card.Text>
              <Button variant="primary">{e.id}</Button>
            </Card.Body>
          </Card>
        </div>
      ))}

      {/* <div class="column">
                                                                                                                                                                                            <p>
                                                                                                                                                                                              
                                                                                                                                                                                              Column 1 - can someone explain how to comment this part of code ? ? ?
                                                                                                                                                                                            </p>
                                                                                                                                                                                            <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                            <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                            <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                          </div>
                                                                                                                                                                                          <div class="column">
                                                                                                                                                                                            <p> Column 2 </p> <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                            <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                            <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                          </div>
                                                                                                                                                                                          <div class="column">
                                                                                                                                                                                            <p> Column 3 </p> <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                            <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                            <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                          </div>
                                                                                                                                                                                          <div class="column">
                                                                                                                                                                                            <p> Column 4 </p> <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                            <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                            <img class="imgGallery shrink" src={no_img} alt="" />
                                                                                                                                                                                          </div> */}
    </div>
  );
};

export default Gallery;
