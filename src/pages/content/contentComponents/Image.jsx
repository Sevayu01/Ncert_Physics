import PropTypes from "prop-types";

const Image = ({ info }) => {
  return (
    <div className="w-full flex justify-center ">
      <img src={info.body} alt={info.alt} className="w-96 "></img>
    </div>
  );
};

Image.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Image;
