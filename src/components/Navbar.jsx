import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div className=" bg-[#333539] w-full h-16 py-4 px-10 flex flex-row justify-between text-white">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>{title}</p>
      <p>Menu</p>
    </div>
  );
};

export default Navbar;
