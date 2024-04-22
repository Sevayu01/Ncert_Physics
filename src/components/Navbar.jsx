import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
const Navbar = ({ title ,toggle}) => {
  return (
    <div className=" bg-[#333539] w-full h-16 py-4 px-10 flex flex-row justify-between text-white">
      <div className="flex flex-row gap-5">
        <button id="toggleSidebar" className="lg:hidden  text-white px-2 pb-2" onClick={toggle}>
          ☰
        </button>
        <Link to="/"><button>Home</button></Link>
        {/* <button>Home</button> */}
      </div>
      <p>{title}</p>
      <p></p>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default Navbar;
  