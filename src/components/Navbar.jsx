import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, isDashboardPage }) => {
  return (
    <div className=" bg-[#333539] w-full h-16 py-4 px-10 hidden sm:flex flex-row justify-between text-white">
      <div className="flex flex-row gap-5">
        {!isDashboardPage && (
          <>
            <Link to="/">
              <button>Home</button>
            </Link>
          </>
        )}
      </div>
      <p>{title}</p>
      <p></p>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  isDashboardPage: PropTypes.bool.isRequired,
};

export default Navbar;
