import React from "react";
import { Img, Wrapper, Text } from "./Part4_Style";
import img5 from "../assets/img5.png";

const Part4 = () => {
  return (
    <Wrapper>
      <Img src={img5} />
      <Text>
        <h6>ABOUT US</h6>
        <h2>
          A modern day <br /> scent company
        </h2>
        <h5>
          Be it fresh and plush, or musky or verdant, <br /> scent is at the
          centre of everything we do.
        </h5>
        <p>
          From Body, Hair, Home and Essential <br /> Cleaning, our products are
          crafted to be <br /> both beautiful and uplifting, practical <br />{" "}
          and effective.
        </p>
        <button>Read More</button>
      </Text>
    </Wrapper>
  );
};

export default Part4;
