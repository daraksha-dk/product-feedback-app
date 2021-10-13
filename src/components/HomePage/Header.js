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
  width: 100vw;
  padding: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 0.9375em;
  color: var(--white);
  line-height: normal;
`;

const SecondaryTitle = styled.span`
  font-size: 0.8125em;
  color: var(--white);
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
            alt="Hamburger menu"
            onClick={toggleMenu}
            style={isToggled ? null : { display: "block" }}
          />

          <Icon
            src="/assets/shared/mobile/icon-close.svg"
            alt="Close menu"
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
