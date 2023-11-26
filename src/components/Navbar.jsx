const Navbar = ({ title }) => {
  return (
    <div className=" bg-[#333539] w-full h-16 py-4 px-10 flex flex-row justify-between text-white">
      <p>Home</p>
      <p>{title}</p>
      <p>Menu</p>
    </div>
  );
};

export default Navbar;
