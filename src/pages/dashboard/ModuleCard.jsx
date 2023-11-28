import quizIcon from "../../assets/quiz.png";
import faqIcon from "/assets/faq.png";
import { Link } from "react-router-dom";

const ModuleCard = ({ name }) => {
  const colors = [
    "#74FFEE",
    "#FF7474",
    "#FFD074",
    "#74FFAB",
    "#DBFF74",
    "#FF74E0",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const cardStyle = {
    width: "18rem",
    height: "23rem",
    backgroundColor: randomColor,
    borderRadius: "8px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const contentStyle = {
    backgroundColor: "#fff",
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    top: "60%",
    paddingTop: "1rem",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
  };

  return (
    <Link to="chapter1">
      <div style={cardStyle}>
        <div style={contentStyle}>
          <center style={{ fontWeight: "bold", fontSize: "16px" }}>
            {name}
          </center>
          <div className="px-16 bottom-0 left-0 right-0 top-20 absolute flex flex-row justify-around">
            <Link to="quiz">
              <img src={quizIcon} className="w-8 h-8 cursor-pointer" />
            </Link>

            <img src={faqIcon} className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;
