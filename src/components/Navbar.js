import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon, BitcoinDollar } from "./Icons";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.grey};
  z-index: 99;
  padding: 0.7rem 1.5rem;

  input {
    width: 500px;
  }

  .toggle-navhandler {
    display: none;
  }

  .logo span {
    position: relative;
    top: 1px;
  }

  ul {
    list-style: none;
    display: flex;
    position: relative;
    top: 2px;
  }

  li svg {
    margin-right: 1.7rem;
    position: relative;
    top: 3px;
  }

  img {
    position: relative;
    top: 3px;
  }

  @media screen and (max-width: 1093px) {
    .toggle-navhandler {
      display: block;
    }
  }

  @media screen and (max-width: 1000px) {
    input {
      width: 400px;
    }
  }

  @media screen and (max-width: 850px) {
    input {
      width: 280px;
    }
  }

  @media screen and (max-width: 500px) {
    .toggle-navhandler {
      display: none;
    }

    li svg {
      width: 30px;
      height: 30px;
      margin-right: 1.7rem;
      position: relative;
      top: 0px;
    }
  }
`;

const LogoWrap = styled.div`
  padding-top: 10px;

  @media screen and (max-width: 1093px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 1000px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 850px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 500px) {
    padding-top: 10px;
  }
`;

const Navbar = () => {

  return (
    <Wrapper>
      <div className="logo flex-row">

        <span>
          <Link to="/"><LogoWrap><BitcoinDollar fill1="ef853b" fill2="#ef853b" height="36" /></LogoWrap></Link>
        </span>
      </div>

      <ul>
        <li>
          <h2>yo</h2>
        </li>
        <li>
          <h2>yoyo</h2>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
