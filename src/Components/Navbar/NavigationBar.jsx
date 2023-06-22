import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <div className="border-b-2 border-gray-100">
      <Navbar className="max-w-7xl container mx-auto py-8 ">
        <Navbar.Brand href="/">
          <h2 className="text-2xl font-bold ">
            <span className="text-blue-500">UNIQUE</span>
            <span className="text-red-500">RECIPE</span>
          </h2>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={true}
              inline={true}
              label={
                <Tooltip content={user?.displayName}>
                  <Avatar
                    alt="User settings"
                    img={user?.photoURL}
                    rounded={true}
                    content="Tooltip content"
                  />
                </Tooltip>
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/login">
              <button className="py-2 px-7 rounded-md font-medium border-2 border-gray-300 duration-300 hover:bg-black hover:text-white">
                Login
              </button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="">About</Navbar.Link>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
