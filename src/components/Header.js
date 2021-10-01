import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";
import FeedbackBar from "./FeedbackBar";

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

const Navi = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 0.9375em;
  color: #fff;
  line-height: normal;
`;

const SecondaryTitle = styled.span`
  font-size: 0.8125em;
  color: #fff;
  font-weight: 500;
  opacity: 75%;
`;

const MenuIcon = styled.img`
  cursor: pointer;
  display: none;
`;

const CloseIcon = styled.img`
  cursor: pointer;
  display: none;
`;

const SuggestionsHeader = ({ toggle, isToggled }) => {
  return (
    <Container>
      <Header>
        <Navi>
          <Title>Frontend Mentor</Title>
          <SecondaryTitle>Feedback Board</SecondaryTitle>
        </Navi>

        <div>
          <MenuIcon
            src="/assets/shared/mobile/icon-hamburger.svg"
            alt="Hamburger menu"
            onClick={toggle}
            style={isToggled ? null : { display: "block" }}
            //when we click on the menu button, we want to display the sidebar and overlay
          />

          {/* onclick, show the close button */}
          <CloseIcon
            src="/assets/shared/mobile/icon-close.svg"
            alt="Close menu"
            onClick={toggle}
            style={isToggled ? { display: "block" } : null}
          />
        </div>
      </Header>
      {/* if togglesidebar is true, conditionally render the sidebar and overlay */}

      {isToggled ? <Overlay /> : null}
      {isToggled ? <Sidebar /> : null}
    </Container>
  );
};

export default SuggestionsHeader;
