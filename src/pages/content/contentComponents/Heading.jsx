import PropTypes from "prop-types";

const Heading = ({ heading }) => {
  return (
    <div className="w-full text-left">
      <h1 className="mt-8 mb-2 text-3xl font-bold">{heading}</h1>
    </div>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Heading;
