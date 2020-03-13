import React, { Component } from "react";
import css from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

class SideBar extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div className={css.sidebar}>
        <NavLink
          exact
          to="/"
          className={css.link}
          activeClassName={css.activelink}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={css.link}
          activeClassName={css.activelink}
        >
          Catalog
        </NavLink>
      </div>
    );
  }
}

export default SideBar;
