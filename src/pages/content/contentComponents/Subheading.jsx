import PropTypes from "prop-types";

const Subheading = ({ subheading }) => {
  return (
    <div className="text-left w-full">
      <h1 className="text-3xl text-semibold">{subheading}</h1>
    </div>
  );
};

Subheading.propTypes = {
  subheading: PropTypes.string.isRequired,
};

export default Subheading;
