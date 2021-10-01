import React from "react";
import {
  Img1,
  Wrapper,
  Logo,
  WrapNavbar,
  Navbar,
  Container,
  Black,
} from "./Part1_Style";
import img1 from "../assets/img1.png";
import logo from "../assets/logo.svg";
import navbar from "../assets/navbar.svg";

const Part1 = () => {
  return (
    <Wrapper>
      <Container>
        <Img1 src={img1} alt="img1" />
        <Logo src={logo} alt="logo" />
        <WrapNavbar>
          <Navbar>
            <h4>CART(0)</h4>
            <img src={navbar} alt="" />
          </Navbar>
          <h3>
            Let Power House Tui & Kahili uplift every <br /> space and surface
            that surrounds you, <br /> with each mist-filled pump.
          </h3>
          <h1>SHOP NEW PRODUCT</h1>
          <Black>
            <h2>
              This website uses cookies to give <br /> you the best shopping
              experience. <br /> By continuing to browse the website <br /> we
              assume that you agree to the <br /> use of such cookies. Learn
              more <br /> about cookies and how we use <br /> them.
            </h2>
          </Black>
        </WrapNavbar>
      </Container>
      <h1>Take your home scent to another realm</h1>
    </Wrapper>
  );
};

export default Part1;
