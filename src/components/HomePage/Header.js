import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";

const Container = styled.div`
  position: relative;
`;

const Header = styled.header`
  background-image: url("/assets/suggestions/mobile/background-header.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 72px;
  /* width: 100vw; */
  padding: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    height: 178px;
    width: 223px;
    border-radius: 20px;
    align-items: flex-end;
    background-image: url("/assets/suggestions/tablet/background-header.png");
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
`;

const Title = styled.p`
  font-size: 0.9375em;
  font-weight: 700;
  letter-spacing: -0.19px;
`;

const SecondaryTitle = styled.span`
  font-size: 0.8125em;
  font-weight: 500;
  opacity: 75%;
`;

const Icon = styled.img`
  cursor: pointer;
  display: none;
`;

const SuggestionsHeader = () => {
  const [isToggled, setisToggled] = useState(false);

  const toggleMenu = () => {
    setisToggled(!isToggled);
  };

  return (
    <Container>
      <Header>
        <Div>
          <Title>Frontend Mentor</Title>
          <SecondaryTitle>Feedback Board</SecondaryTitle>
        </Div>

        <div>
          <Icon
            src="/assets/shared/mobile/icon-hamburger.svg"
            alt="Hamburger menu icon"
            onClick={toggleMenu}
            style={isToggled ? null : { display: "block" }}
          />

          <Icon
            src="/assets/shared/mobile/icon-close.svg"
            alt="Close menu icon"
            onClick={toggleMenu}
            style={isToggled ? { display: "block" } : null}
          />
        </div>
      </Header>

      {isToggled ? <Overlay toggle={toggleMenu} /> : null}
      {isToggled ? <Sidebar /> : null}
    </Container>
  );
};

export default SuggestionsHeader;
