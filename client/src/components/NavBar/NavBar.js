import React from "react";
import { Link, } from "react-router-dom";
import styled from "styled-components";
import NavIcon from "../../assets/images/ace.png";

const StyledNavBar = styled.nav`
  background: #1b1c1d;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  margin: 0;
  padding-left: 2%;
  width: 100%;
  min-height: 3em;
  display: flex;
  a,
  .header {
    display: inline-block;
    text-decoration: none;
    color: #eaeaea;
    position: relative;
    text-align: center;
  }
  a {
    width: 6em;
    padding: 1em;
  }
  a:hover {
    color: #fff;
    background: #333;
  }
  a:before,
  .header:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background: #666;
  }
  .header {
    font-weight: 600;
    padding: 1em;
    padding-top: 0.7em;
    min-width: 176px;
  }
  img {
    width: 1.5em;
    height: 1.4em;
    margin: 0 0.4em -0.2em 0;
  }
`;

const NavBar = () => (
  <StyledNavBar>
    <div>
      <div className="header">
        <img src={NavIcon} />
        LN Card Maker
      </div>
      <Link to="/">Dashboard</Link>
      <Link to="/newCard">Create card</Link>
    </div>
  </StyledNavBar>
);

export default NavBar;
