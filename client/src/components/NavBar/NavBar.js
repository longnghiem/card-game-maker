import React from "react";
import { Link, } from "react-router-dom";
import styled from "styled-components";

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
  align-items: center;

  a {
    text-decoration: none;
    color: #eaeaea;
    padding: 1em;
    vertical-align: middle;
    position: relative;
  }
  a:hover {
    color: #fff;
    background: #333;
  }
  a:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background: #666;
  }
`;

const NavBar = () => (
  <StyledNavBar>
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/newCard">Create card</Link>
    </div>
  </StyledNavBar>
);

export default NavBar;
