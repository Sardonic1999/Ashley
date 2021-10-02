import React from "react";
import { Left, Right, Wrapper } from "./Part3_Style";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const Part3 = () => {
  return (
    <Wrapper>
      <Left>
        <img src={img3} alt="" />
        <h2>Dialed to 70% alcohol</h2>
      </Left>
      <Right>
        <img src={img4} alt="" />
        <h2>REFILL WITH TOPUP</h2>
      </Right>
    </Wrapper>
  );
};

export default Part3;
