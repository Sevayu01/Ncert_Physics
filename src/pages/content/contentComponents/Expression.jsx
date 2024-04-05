import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const Expression = ({ latex }) => {
  return (
    <>
    <center className="my-2 relative">
      <Latex>{latex}</Latex>
    </center>
    </>
  );
};

export default Expression;
