import React from "react";
import { Container, Wrapper, Img6, Text } from "./Part5_Style";
import img6 from "../assets/img6.png";

const Part5 = () => {
  return (
    <Wrapper>
      <Container>
        <Text>
          <h2>MODERN REED DIFFUSER</h2>
          <p>
            Home Perfume does the hard work for <br /> you, offering a subtle
            yet consistent <br /> scent in your home, eliminating the <br />{" "}
            need to have to scent ‘by hand’.
          </p>
          <h4>VIEW MORE</h4>
        </Text>
        <Img6 src={img6} />
      </Container>
    </Wrapper>
  );
};

export default Part5;
