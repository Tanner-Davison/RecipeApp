import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./Header.module.css";
import {styled} from 'styled-components'

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to="" className={styles.link}>
          <button className={styles.nav_btn}>Home</button>
        </Link>
        <Link to="/newRecipe" className={styles.link}>
          <button className={styles.nav_btn}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;


