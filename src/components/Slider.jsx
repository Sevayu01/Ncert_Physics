// import gif1 from "../assets/Formula1/gif1.gif";
import gif2 from "/assets/Formula1/gif2.gif";
import gif3 from "/assets/Formula1/gif3.gif";
import gif4 from "/assets/Formula1/gif4.gif";
import gif1 from "/assets/Formula1/gif1.gif";
import { useState } from "react";

const Slider = () => {
  const gifs = [gif1, gif2, gif3, gif4];
  const [currentSlide, setCurrentSlide] = useState(0);
  const selectedgif = gifs[currentSlide];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % gifs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? gifs.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="flex justify-center items-center gap-10">
        <button
          className=" bg-gray-500 px-4 py-2 text-white rounded"
          onClick={prevSlide}
        >
          Previous
        </button>
        {/* <img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/Formula1/gif1.gif`} alt={`Slide ${currentSlide + 1}`} className="max-h-full" /> */}
        <img
          src={selectedgif}
          alt={`Slide ${currentSlide + 1}`}
          className="max-h-full"
        />
        <button
          className=" bg-gray-500 px-4 py-2 text-white rounded"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
      <span className="pt-2 text-center text-semibold text-lg text-red-600">{`Slide ${
        currentSlide + 1
      }`}</span>
    </div>
  );
};

export default Slider;
