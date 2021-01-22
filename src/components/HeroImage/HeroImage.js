import React from "react";
import { Image } from "react-bootstrap";
import "../HeroImage/style.css"



function HeroImage() {
  return (
    
    <Image 
    className="image" 
    alt="Hero Image"
    src="https://github.com/Janice-cloud/jleung/blob/master/src/images/background_image.jpeg?raw=true"
    ></Image>
  
  );
}

export default HeroImage;