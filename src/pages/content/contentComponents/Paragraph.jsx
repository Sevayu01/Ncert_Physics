import PropTypes from "prop-types";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const Paragraph = ({ text }) => {
  return (
    <div className="text-left w-full mb-4 text-lg relative">
      <Latex>
        {text}
      </Latex>
    </div>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
