function Navbar() {
  return (
    <>
      <div className="navbar flex justify-between items-center p-3">
        <div className="flex justify-center items-center">
          <div className="hamburger inline-block cursor-pointer p-3 md:hidden">
            <div className="line h-0.5 w-6 my-1 bg-black "></div>
            <div className="line h-0.5 w-6 my-1 bg-black "></div>
            <div className="line h-0.5 w-6 my-1 bg-black "></div>
          </div>
          <div className="search">Search</div>
        </div>
        <div className="logo text-center md:order-2">Microsoft</div>
        <div className="cart">Cart Account</div>
      </div>
    </>
  );
}
export default Navbar;
