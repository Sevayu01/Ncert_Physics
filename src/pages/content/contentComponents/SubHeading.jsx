import PropTypes from "prop-types";

const SubHeading = ({ heading }) => {
  return (
    <div className="text-left w-full">
      <h6 className="text-xl font-bold mb-2 mt-8">{heading}</h6>
    </div>
  );
};

SubHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SubHeading;
