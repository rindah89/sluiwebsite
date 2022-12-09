import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { HiBars3BottomLeft } from "react-icons/hi2";

// styles
import "./navbar.css";

import { UseScrollPosition } from "../../lib/hooks/useScrollPosition";
import PopupWidget from "../popup-widget/PopupWidget";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const position = UseScrollPosition();

  const toggleState = () => {
    setShowMenu(false);
  };

  return (
    <nav className={`navbar ${position >= 100 ? "bg" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src="/images/logo_red.webp" alt="logo" />
        </Link>
      </div>
      <ul className={`menu ${showMenu ? "show" : null}`}>
        <div className="close">
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              setShowMenu(false)
            }
          >
            <AiOutlineClose />
          </button>
        </div>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Programmes</Link>
        </li>
        <li>
          <Link to="/our-faculties">Faculties</Link>
        </li>
        <li>
          <Link to="/our-campuses">Campuses</Link>
        </li>
        <li>
          <Link
            style={{ fontWeight: "800", color: "var(--main-color)" }}
            to="/"
          >
            Apply
          </Link>
        </li>

        <li>
          <div></div>
        </li>

        <li className="non">
          <Link to="/">EN</Link>
        </li>
        <li className="non">
          <Link to="/">
            <AiOutlineSearch style={{ marginTop: "0.3rem" }} size={26} />
          </Link>
        </li>
        <PopupWidget show={showMenu} toggleState={toggleState} />
        <li className="non">
          <HiBars3BottomLeft
            onClick={() => setShowMenu(true)}
            style={{ marginTop: "0.3rem", cursor: "pointer" }}
            size={28}
          />
        </li>
      </ul>
      <ul className="mobile">
        <li>
          <Link to="/">EN</Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineSearch style={{ marginTop: "0.3rem" }} size={26} />
          </Link>
        </li>
        <li>
          <HiBars3BottomLeft
            onClick={() => setShowMenu(true)}
            style={{ marginTop: "0.3rem", cursor: "pointer" }}
            size={28}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
