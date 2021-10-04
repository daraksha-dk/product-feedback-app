import React, { useState } from "react";
import styled from "styled-components";

const Menu = styled.div`
  background-color: #f7f8fd;
  height: calc(100vh - (72px));
  //fills in the rest of the context after the header
  width: 72%;
  margin-left: auto;
  padding: 1.5em 1.5em 0 1.5em;
  display: flex;
  flex-direction: column;
  gap: 24px; //MAY CHANGE LATER
  position: absolute;
  right: 0;
  z-index: 10;
`;
const Search = styled.div`
  background-color: #fff;
  padding: 1.5em;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  /* column-gap: 0.875em;
  row-gap: 0.875em; */
  gap: 0.9em;
`;

const Button = styled.button`
  padding: 0.5625rem 1rem;
  border-radius: 10px;
  background-color: #f2f4ff;
  font-weight: 600;
  color: #4661e6;
  font-size: 13px;

  :hover {
    background-color: #4661e6;
    color: #fff;
  }
`;

const Roadmap = styled.div`
  background-color: #fff;
  padding: 1.5em;
  border-radius: 10px;
`;

const RoadmapView = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5em;
`;

const ViewLink = styled.a`
  color: #4661e6;
  font-weight: 600;
`;

const ProgressTracker = styled.div`
  //margin-top: 1em;
`;

const ProgressList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-left: 1em;
  font-weight: 400;
  color: #3a4374;

  ::before {
    padding: inherit;
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 7px;
    left: -15px;
    width: 8px;
    height: 8px;
    background: ${(props) => props.theme.color};
  }
`;

const Span = styled.span`
  font-weight: 700;
  color: #647196;
`;

const Sidebar = () => {
  const [planned, setPlanned] = useState(2);
  const [inProgress, setInProgress] = useState(3);
  const [live, setLive] = useState(1);

  return (
    <Menu>
      <Search>
        <Button>All</Button>
        <Button>UI</Button>
        <Button>UX</Button>
        <Button>Enhancement</Button>
        <Button>Bug</Button>
        <Button>Feature</Button>
      </Search>

      <Roadmap>
        <RoadmapView>
          <h3>Roadmap</h3>
          <ViewLink href="/roadmap">View</ViewLink>
        </RoadmapView>

        <ProgressTracker>
          <ProgressList>
            <ListItem theme={{ color: "#f49f85" }}>
              Planned <Span>{planned}</Span>
            </ListItem>
            <ListItem theme={{ color: "#ad1fea" }}>
              In Progress <Span>{inProgress}</Span>
            </ListItem>
            <ListItem theme={{ color: "#62bcfa" }}>
              Live <Span>{live}</Span>
            </ListItem>
          </ProgressList>
        </ProgressTracker>
      </Roadmap>
    </Menu>
  );
};

export default Sidebar;
