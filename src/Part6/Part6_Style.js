import styled from "styled-components";
import img7 from "../assets/img7.png";

export const Wrapper = styled.div`
  width: 1520px;
  height: 800px;
  background: url(${img7});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0px;
  box-sizing: border-box;
`;

export const Text = styled.div`
  padding: 119px 40px;
  h6 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;

    letter-spacing: 0.5px;

    color: #262626;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 32px;
    letter-spacing: 0.5px;

    color: #262626;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.5px;

    color: #262626;
  }
  button {
    width: 150px;
    height: 50px;
    cursor: pointer;
    border-radius: 20px;
  }
`;
