import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1520px;
  height: 800px;
  background: white;
  border-radius: 0px;
  box-sizing: border-box;
`;

export const Left = styled.div`
  flex: 1;
  position: relative;
  img {
    width: 760px;
    height: 800px;
  }
  h2 {
    position: absolute;
    top: auto;
    width: 265px;
    bottom: 50px;
    margin: 0px;
    margin-left: 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    color: #262626;
    :hover {
      border-bottom: 1px solid black;
    }
  }
`;

export const Right = styled.div`
  flex: 1;
  position: relative;
  img {
    width: 760px;
    height: 800px;
  }
  h2 {
    position: absolute;
    top: auto;
    width: 200px;
    bottom: 50px;
    margin: 0px;
    margin-left: 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    color: #262626;
    :hover {
      border-bottom: 1px solid black;
    }
  }
`;
