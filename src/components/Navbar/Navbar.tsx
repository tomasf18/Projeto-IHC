import { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useUser } from "../../contexts/UserContext";

export default function Component() {
  const navigate = useNavigate();
  const location = useLocation();
  const baseLinkClassName =
    "block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700";

  const linkClassName = (path: string) => {
    return `${baseLinkClassName} ${
      location.pathname === path
        ? "bg-gray-50 md:bg-transparent md:text-cyan-700"
        : ""
    }`;
  };
  interface Link {
    path: string;
    label: string;
    icon: string;
  }
  const clientLinks = [
    { path: "/price-list", label: "Price List", icon: "fa-solid fa-tag" },
    { path: "/trending", label: "Trends", icon: "fa-solid fa-fire" },
    {
      path: "/appointment",
      label: "My Appointments",
      icon: "fa-solid fa-calendar-check",
    },
    {
      path: "/establishments",
      label: "Establishments",
      icon: "fa-sharp fa-solid fa-location-dot",
    },
    { path: "/shop", label: "Shop", icon: "fa-solid fa-cart-shopping" },
    { path: "/help", label: "Help", icon: "fa-solid fa-circle-info" },
  ];

  const stylistLinks = [
    { path: "/price-list", label: "Price List", icon: "fa-solid fa-tag" },
    {
      path: "/appointments",
      label: "Appointments",
      icon: "fa-solid fa-calendar-check",
    },
    { path: "/help", label: "Help", icon: "fa-solid fa-circle-info" },
  ];
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const { user, logout } = useUser();

  const handleProfileClick = () => {
    if (user?.isClient) {
      navigate("/client");
    } else {
      navigate("/professional");
    }
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  function handleLogout() {
    logout();
    navigate("/");
  };

  const linkWithModal = (link: Link) => {
    if (link.path === "/appointment" && !user) {
      return (
        <div key={link.path}>
          <a
            href={link.path}
            className={linkClassName(link.path)}
            onClick={(e) => {
              e.preventDefault();
              setOpenLoginModal(true);
            }}
          >
            <i className={link.icon}></i>
            <span className="ml-2">{link.label}</span>
          </a>
        </div>
      );
    } else {
      return (
        <Link
          key={link.path}
          to={link.path}
          className={`flex items-center ${linkClassName(link.path)}`}
        >
          <i className={link.icon}></i>
          <span className="ml-2">{link.label}</span>
        </Link>
      );
    }
  };
  return (
    <Navbar fluid rounded className="fixed top-0 w-full">
      <Link to="/" className="flex flex-row">
        <img
          src="/public/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Stylist Company Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Stylist Co.
        </span>
      </Link>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="/public/user.png" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.email.split("@")[0]}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={handleProfileClick}>Profile</Dropdown.Item>
            <Dropdown.Item onClick={handleSettingsClick}>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <button
            className="w-20 h-10 border text-cyan-700 hover:text-white bg-white hover:bg-cyan-700 hover:shadow-lg font-medium rounded-lg text-sm
          transition-all duration-300 ease-in-out"
            onClick={() => setOpenLoginModal(true)}
          >
            Login
          </button>
        )}
        <LoginModal
          openModal={openLoginModal}
          onCloseModal={() => setOpenLoginModal(false)}
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {(user && user.isClient) || !user ? (
          <>{clientLinks.map((link) => linkWithModal(link))}</>
        ) : (
          <>{stylistLinks.map((link) => linkWithModal(link))}</>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
