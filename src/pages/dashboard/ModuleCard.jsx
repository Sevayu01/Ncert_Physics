import quizIcon from "/assets/quiz.png";
import cheatSheet from "/assets/cheatsheet.png";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ModuleCard = ({ name, link, imagesrc }) => {

  const cardStyle = {
    width: "19.5rem",
    height: "23rem",
    borderRadius: "8px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
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
    <Link to={`/${link}/introduction`}>
      <div style={cardStyle}>
        <img src={imagesrc} />
        <div style={contentStyle}>
          <center style={{ fontWeight: "bold", fontSize: "16px" }}>
            {name}
          </center>
          <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-around px-16 top-20">
            <Link to={`/${link}/quiz`}>
              <img src={quizIcon} className="w-8 h-8 cursor-pointer" />
            </Link>

            <Link to={`/${link}/cheat-sheet`}>
            <img src={cheatSheet} className="w-8 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

ModuleCard.propTypes = {
  name: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ModuleCard;
