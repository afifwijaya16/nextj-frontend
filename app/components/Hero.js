import React from "react";
import HeroImage from "./../assets/hero-image2.jpeg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      <Image alt="Jaya Bakery Building" className="w-full" src={HeroImage} />
    </div>
  );
};

export default Hero;
