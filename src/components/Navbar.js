import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsvLogo } from "./Icons";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.grey};
  z-index: 99;
  padding: 0.7rem 1.5rem;

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
        <span>
          <Link to="/"><LogoWrap><BsvLogo height="40"fill1="#e2b43d" fill2="#fff" fill3="#e2b43d" fill4="#fff" fill5="#fff" fill6="#fff" fill7="#fff" fill8="#fff" fill9="#fff" /></LogoWrap></Link>
        </span>

        {/* <div>About</div> */}

    </Wrapper>
  );
};

export default Navbar;
