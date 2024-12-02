import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import pic1 from "../../assets/Gallery1.png";
import pic2 from "../../assets/Gallery2.png";
import pic3 from "../../assets/Gallery3.png";
import pic4 from "../../assets/Gallery4.png";
import pic5 from "../../assets/Gallery5.png";
import pic6 from "../../assets/Gallery6.png";
import pic7 from "../../assets/Gallery7.png";
import pic8 from "../../assets/Gallery8.png";
import pic9 from "../../assets/Gallery9.png";

const Gallery = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9]; 
  
  return (
    <div className="p-5 text-center">
      <header className="mb-5">
        <h3 className="text-lg text-black font-thin">Share your setup with</h3>
        <p className="text-3xl font-bold">#FuniroFurniture</p>
      </header>

      {/* Responsive Masonry Layout */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} 
      >
        <Masonry gutter="10px"> {/* the space between images */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              style={{ width: "100%", display: "block", borderRadius: "10px" }} 
              alt={`Gallery ${index + 1}`}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
