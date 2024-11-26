import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flexCenter py-8 bg-white">
      {/* logo */}
      <Link
        to={"/"}
        className="bold-24 flex absolute left-0 right-0 w-full flexCenter"
      >
        <h4 className="shadow-sm text-secondary text-md flexCenter h-10 px-4 rounded-full">
          Shirt Threads
        </h4>
      </Link>
    </header>
  );
};

export default Header;
