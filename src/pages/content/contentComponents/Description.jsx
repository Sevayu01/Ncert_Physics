import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import PropTypes from 'prop-types';

const Description = ({ text }) => {
  return (
    <>
    <center className="my-2 relative px-[30%] relative">
      <Latex>{text}</Latex>
    </center>
    </>
  );
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
