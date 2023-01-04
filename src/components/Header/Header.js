import "./Header.css";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const links = [
  {
    to: "/",
    name: "home",
  },
  {
    to: "about",
    name: "about",
  },
  {
    to: "contact",
    name: "contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="header">
      <div className="list">
        {links.map(({ to, name }, i) => (
          <div
            key={`list-item-${i}`}
            className={classNames(
              "list-item",
              pathname.length === 1 && pathname === to
                ? "active"
                : pathname === `/${to}`
                ? "active"
                : ""
            )}
          >
            <Link to={to}>{name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
