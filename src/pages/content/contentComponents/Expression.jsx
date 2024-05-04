import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import PropTypes from 'prop-types';

const Expression = ({ latex }) => {
  return (
    <>
    <center className="my-2 relative overflow-x-scroll">
      <Latex>{latex}</Latex>
    </center>
    </>
  );
};

Expression.propTypes = {
  latex: PropTypes.string.isRequired,
};

export default Expression;
