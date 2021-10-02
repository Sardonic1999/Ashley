import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1520px;
  height: 800px;
  background: #ebebeb;
  border-radius: 0px;
  box-sizing: border-box;
`;

export const Img = styled.img`
  width: 796px;
  height: 568px;
  padding: 116px 25px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h6 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.5px;

    color: #262626;
  }
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.5px;

    color: #262626;
  }
  h5 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.5px;

    color: #262626;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.5px;

    color: #262626;
  }
  button {
    width: 100px;
    height: 30px;
    cursor: pointer;
    background: transparent;
    border: 1px solid transparent;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 1.2px;
    text-transform: uppercase;

    color: #262626;
    :hover {
      border-bottom: 1px solid black;
    }
  }
`;
