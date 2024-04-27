import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Component() {
    const linkClassName = "block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700";

    return (
        <Navbar fluid rounded>
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
                <Button>Login</Button>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to="/" className={linkClassName}>Shop</Link>
                <Link to="/" className={linkClassName}>Trends</Link>
                <Link to="/appointment" className={linkClassName}>Appointment</Link>
                <Link to="/" className={linkClassName}>Establishments</Link>
                <Link to="/" className={linkClassName}>Help</Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
