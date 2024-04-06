import PropTypes from "prop-types";

const Paragraph = ({ text }) => {
  return (
    <div className="text-left w-full mb-4">
      <p className="text-lg">{text}</p>
    </div>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
