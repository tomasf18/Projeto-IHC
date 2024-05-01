import { useState } from "react";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import AppointmentModal from "./AppointmentModal";
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
  }
  const clientLinks = [
    { path: "/shop", label: "Shop" },
    { path: "/trending", label: "Trends" },
    { path: "/appointment", label: "Appointment" },
    { path: "/establishments", label: "Establishments" },
    { path: "/help", label: "Help" },
  ];
  const stylistLinks = [
    { path: "/help", label: "Help" },
    { path: "/appointments", label: "Appointments" },
  ];
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  const { user, logout } = useUser();

  const handleProfileClick = () => {
    if (user?.isClient) {
      navigate("/client");
    } else {
      navigate("/professional");
    }
  }

  function onCloseLoginModal() {
    setOpenLoginModal(false);
  }

  function handleLogout() {
    logout();
    navigate("/");
  }

  const linkWithModal = (link: Link) => {
    if (link.path === '/appointment' && !user) {
      return (
        <div key={link.path}>
          <a
            href={link.path}
            className={linkClassName(link.path)}
            onClick={(e) => { e.preventDefault(); setOpenAppointmentModal(true); }}
          >
            {link.label}
          </a>
          <AppointmentModal openModal={openAppointmentModal} onCloseModal={() => setOpenAppointmentModal(false)} />
        </div>
      );
    } else {
      return (
        <Link
          key={link.path}
          to={link.path}
          className={linkClassName(link.path)}
        >
          {link.label}
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
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Button onClick={() => setOpenLoginModal(true)}>Login</Button>
        )}
        <LoginModal openModal={openLoginModal} onCloseModal={onCloseLoginModal} />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {(user && user.isClient) || !user ? (
          <>
            {clientLinks.map((link) => linkWithModal(link))}
          </>
        ) : (
          <>
            {stylistLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={linkClassName(link.path)}
              >
                {link.label}
              </Link>
            ))}
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
