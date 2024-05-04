import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const MobileNavbar = ({ title, toggle }) => {
  return (
    <div className="sm:hidden block">
      <div className=" bg-[#333539] w-full px-2 py-2 block justify-between text-white text-lg">
        <div className="flex justify-between">
          <button
            id="toggleSidebar"
            className="lg:hidden text-white px-2"
            onClick={toggle}
          >
            ☰
          </button>
          <Link to="/">
            <IoMdHome className="text-2xl pt-1" />
          </Link>
        </div>
      </div>
      <p className="w-full bg-[#2b2d30] text-white px-2 py-2">{title}</p>
    </div>
  );
};

MobileNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  isDashboardPage: PropTypes.bool.isRequired,
};

export default MobileNavbar;
