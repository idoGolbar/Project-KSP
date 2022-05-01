import { useState } from "react";
import styled from "styled-components";
import LogoNavBar from "../../Png/logoNavBar.png";
import { ProductTab } from "../ProductTab";
import { SearchNav } from "../SearchNav";

export const NavBar = () => {
  enum NameType {
    nameProject = "Digital Store",
  }
  const [openNav, setOpenNav] = useState(false);
  return (
    <div>
      <DackgroundNavBar>
        <DivNAv>
          <div>
            <ImgDiv src={LogoNavBar}></ImgDiv>
          </div>
          <NamNav>{NameType.nameProject}</NamNav>
          <div>
            <StyledBurger open={openNav} onClick={() => setOpenNav(!openNav)}>
              <div />
              <div />
              <div />
            </StyledBurger>
          </div>
        </DivNAv>
        <div>
          <SearchNav />
        </div>
      </DackgroundNavBar>

      <StyledMenu open={openNav}>
        <a href="/">
          <span role="img" aria-label="about us">
            💁🏻‍♂️
          </span>
          About us
        </a>
        <a href="/">
          <span role="img" aria-label="price">
            💸
          </span>
          Pricing
        </a>
        <a href="/">
          <span role="img" aria-label="contact">
            📩
          </span>
          Contact
        </a>
      </StyledMenu>
    </div>
  );
};

const DackgroundNavBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: #d9e1ee;
  height: 20vh;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  margin-bottom: 1rem;

  @media screen and (max-height: 730px) {
    height: 25vh;
  }
`;

const NamNav = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const ImgDiv = styled.img`
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: center;
`;
const DivNAv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  padding-top: 1.5rem;
  height: 4rem;
`;

const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background: #d9e1ee;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  height: 86%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 10%;
  left: 0;
  opacity: 0.9;
  transition: transform 0.3s ease-in-out;

  /* @media (max-width: 576px) {
      width: 100%;
    } */

  a {
    display: flex;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    /* @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    } */

    &:hover {
      color: #343078;
    }
  }
`;

const StyledBurger = styled.button<{ open: boolean }>`
  position: relative;
  /* top: 5%; */
  /* left: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4.5rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#489ce6")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

{
  /* <DivNavBar>
            <NavbarContainer id='container'>
                <div id="hamburger-lines">
                    <span id="line line1"></span>
                    <span id="line line2"></span>
                    <span id="line line3"></span>
                </div>
                <ul id="menu-items">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#food">Category</a></li>
                    <li><a href="#food-menu">Menu</a></li>
                    <li><a href="#testimonials">Testimonial</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <h1 id="logo">RS</h1>
            </NavbarContainer>
        </DivNavBar>
const DivNavBar = styled.div`
display: none;
box-shadow: 0px 5px 10px 0px #aaa;
  position: fixed;
  width: 100%;
  background: #fff;
  color: #000;
  opacity: 0.85;
  height: 50px;
  z-index: 12;
  opacity: 0.95;
#hamburger-lines{
    display: none;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #333;
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
}
`
const NavbarContainer = styled.div`
display: flex;
position: relative;
  justify-content: space-between;
  height: 64px;
  align-items: center;
    height: 64px;
` */
}
