import React from 'react';
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";

const Sponsors = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <div className="flex justify-center items-center space-x-6">
        <img src={image1} alt="" className="w-12 h-12 rounded-full" />
        <img src={image2} alt="" className="w-12 h-12 rounded-full" />
        <img src={image3} alt="" className="w-12 h-12 rounded-full" />
      </div>
      <div className="flex justify-center items-center space-x-6 mt-4">
        <img src={image4} alt="" className="w-12 h-12 rounded-full" />
        <img src={image5} alt="" className="w-12 h-12 rounded-full" />
        <img src={image6} alt="" className="w-12 h-12 rounded-full" />
      </div>
    </div>
  );
};

export default Sponsors;
