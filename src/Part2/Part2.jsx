import React from "react";
import { Container, Img2, Wrapper, Text } from "./Part2_Style";
import img2 from "../assets/img2.png";

const Part2 = () => {
  return (
    <Wrapper>
      <Container>
        <Text>
          <h2>HAND POURED CANDLES</h2>
          <p>
            The flicker of the wick and the <br /> wafting of scent…Waxed
            Perfume is <br />
            the simplest daily self-indulgence.
          </p>
          <h4>browse our full collection</h4>
        </Text>
        <Img2 src={img2} />
      </Container>
    </Wrapper>
  );
};

export default Part2;
