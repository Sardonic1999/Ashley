import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1520px;
  height: 800px;
  background: #a26779;
  border-radius: 0px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const Img6 = styled.img`
  width: 1065px;
  height: 688px;
  margin-left: auto;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: fit-content;
  padding: 40px;
  box-sizing: border-box;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.5px;
    margin: 0px;
    color: #b2b2b2;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.5px;
    margin: 0px;
    padding-top: 550px;
    color: #b2b2b2;
  }
  h4 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    color: #b2b2b2;
    width: 100px;
    margin: 0px;
    padding-top: 20px;
    :hover {
      border-bottom: 1px solid white;
    }
  }
`;
