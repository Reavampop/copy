import { FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { SiAtlassian, SiGooglehome, SiMaildotcom } from "react-icons/si";
import { BsCollectionFill } from "react-icons/bs";

const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
  const navItems = [
    { to: "/", label: "Home", icon: <SiGooglehome /> },
    { to: "/collection", label: "Collection", icon: <BsCollectionFill /> },
    { to: "/about", label: "About", icon: <SiAtlassian /> },
    {
      to: "/mailto:support@shirtthreads.com",
      label: "Contact",
      icon: <SiMaildotcom />,
    },
  ];

  return (
    <nav className={containerStyles}>
      {/* close button inside navbar */}
      {menuOpened && (
        <>
          <FaWindowClose
            onClick={toggleMenu}
            className="text-2xl self-end cursor-pointer relative left-8 text-secondary"
          />
          {/* logo */}
          <Link to={"/"} className="bold-24 !text-[20px] mb-10">
            <h4 className="text-secondary">Shirt Threads</h4>
          </Link>
        </>
      )}
      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex">
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive ? "active-link flexCenter gap-x-2" : "flexCenter gap-x-2"
            }
            onClick={menuOpened && toggleMenu}
          >
            {icon}
            <h5>{label}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
