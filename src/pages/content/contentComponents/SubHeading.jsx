import PropTypes from "prop-types";

const SubHeading = ({ heading }) => {
  return (
    <div className="w-full text-left">
      <h6 className="mt-8 mb-2 text-xl font-bold">{heading}</h6>
    </div>
  );
};

SubHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SubHeading;
