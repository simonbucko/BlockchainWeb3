import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
        <Button style={{ backgroundColor: "#3773f5", color: "black" }}>
          Buy / Sell
        </Button>
        <Button>Send / Receive</Button>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-item: center;
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
  flex: 1;
  font-size: 2rem;
  font-weight: 600;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;
const Button = styled.div`
  border: 1px solid #282b2f;
  text-align: center;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
