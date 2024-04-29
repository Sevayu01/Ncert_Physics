import PropTypes from "prop-types";
import { IoExpand } from "react-icons/io5";
import { IoContractSharp } from "react-icons/io5";
import {  useState } from "react";

const Image = ({ body, alt }) => {
  

  const [overlayVisible, setOverlayVisible] = useState(false);
  const imageItem = (
    <img className="w-full h-full mx-auto object-contain" loading="lazy" src={body} alt={alt} />
  );

  return (
    <center>
      <div
        className={`flex justify-center relative rounded-lg w-[30rem] my-10 ${
          !overlayVisible ? "overflow-hidden" : ""
        }`}
      >
        <button
          onClick={() => setOverlayVisible(!overlayVisible)}
          className="absolute bottom-2 z-10 right-2 w-6 h-6"
        >
          <IoExpand className="text-gray-500 font-extrabold text-xl" />
        </button>
        <div
          className={`bg-gray-100 absolute z-10 border-2 border-white top-[-14rem] bottom-[-14rem] left-[-14rem] right-[-14rem] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden ${
            overlayVisible ? "block" : "hidden"
          }`}
        >
          <button
            onClick={() => setOverlayVisible(!overlayVisible)}
            className="absolute top-2 right-2 w-6 h-6"
          >
            <IoContractSharp className="text-gray-500 font-extrabold text-xl" />
          </button>
          {imageItem}
        </div>
        {imageItem}
      </div>
    </center>
  );
};

Image.propTypes = {
  body: PropTypes.object.isRequired,
  alt: PropTypes.object.isRequired,
};

export default Image;
