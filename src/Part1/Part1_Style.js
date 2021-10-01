import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1520px;
  height: 800px;
  background: #e7f066;
  border-radius: 0px;
  box-sizing: border-box;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 32px;
    letter-spacing: 0.5px;

    color: #262626;
  }
`;

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const Img1 = styled.img`
  width: 1160px;
  height: 688px;
  position: relative;
`;

export const Logo = styled.img`
  padding: 26px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const WrapNavbar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: fit-content;
  padding-left: 40px;
  h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.5px;

    color: #262626;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    color: #262626;
    margin: 0px;
    padding-top: 20px;
    width: 150px;
    :hover {
      border-bottom: 1px solid black;
    }
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  width: 340px;
  height: 100px;
  padding-bottom: 40px;
  h4 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-left: auto;
    color: #262626;
  }
  img {
    width: 50px;
    height: 50px;
    margin-left: auto;
  }
`;

export const Black = styled.div`
  position: absolute;
  width: 376px;
  height: 254px;
  background: #1b1b1b;
  border-radius: 0px;
  padding: 48px;
  right: 15.1%;
  top: 500px;
  box-sizing: border-box;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.5px;

    color: #f1f1ee;
  }
`;
