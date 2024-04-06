import PropTypes from "prop-types";

const Heading = ({ heading }) => {
  return (
    <div className="text-left w-full">
      <h1 className="text-3xl font-bold mb-2 mt-8">{heading}</h1>
    </div>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Heading;
