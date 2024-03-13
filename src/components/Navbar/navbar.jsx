import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/1-removebg-preview.png";
import Style from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import {useValue} from "../../itemContext";

// Rename navbar to Navbar
function Navbar() {
  const { toggle } = useValue();
  return (
    <>
      <nav className={Style.nav}>
        <div className={Style.container}>
          <button className={Style.toggle} type="button-nav">
            <span className={Style.icon}></span>
          </button>
          <Link to="/" className={Style.logo}>
            <img src={Logo} alt="Bazar Apna Logo" /> BAZAR
          </Link>
          <ul className={Style.menu}>
            <li>
              <Link to="/" className={Style.link}>
                Home
              </Link>
            </li>
            <li>
              <a className={Style.link} href="#">
                Link
              </a>
            </li>
           
          </ul>
          <div className={Style.cta}>
            <Link to="/Login" className={Style.button}>
              Login
            </Link>
            <form className={Style.search} role="search">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button type="submit">Search</button>
              <Link to="/CardModal"><span className={Style.button}><FontAwesomeIcon class ={Style.shopping}icon={faShoppingCart} /></span></Link>

            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

// Rename navbar to Navbar
export default Navbar;
