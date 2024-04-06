import PropTypes from "prop-types";

function Gif_Overlay({ src, alt }) {
  return (
    //overlay to show gif in the center of the screen and in bigger size
    <div>
      <img src={src} alt={alt} className="w-96 "></img>
    </div>
  );
}

Gif_Overlay.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Gif_Overlay;
