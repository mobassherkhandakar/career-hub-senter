import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-container">
      <Navbar fluid={true} rounded={true}>
        <Link to={"/"}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CareerHub
          </span>
        </Link>

        <div className="flex md:order-2">
          <Button>Star Applying</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/"
            aria-label="Home"
            title="Home"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            aria-label="statistics"
            title="statistics"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/appliedjobs"
            aria-label="appliedjobs"
            title="appliedjobs"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Appliedjobs
          </NavLink>
          <NavLink
            to="/blog"
            aria-label="blog"
            title="blog"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Blog
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
