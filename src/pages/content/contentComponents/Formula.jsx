import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import PropTypes from 'prop-types';

const Formula = ({ latex }) => {
  return (
    <>
    <div className="my-4 relative overflow-x-scroll sm:overflow-visible flex justify-start">
      <Latex>{latex}</Latex>
    </div>
    </>
  );
};

Formula.propTypes = {
  latex: PropTypes.string.isRequired,
};

export default Formula;
