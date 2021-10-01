import React, { useState } from "react";
import FeedbackBar from "./FeedbackBar";
import Header from "./Header";

const Suggestions = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleMenu = () => {
    setToggleSidebar(!toggleSidebar);
    //might need to check if this is correct later
  };

  return (
    <div>
      <Header toggle={toggleMenu} isToggled={toggleSidebar}/>
      {/* overlay should cover everything except the header */}

      <FeedbackBar />

    </div>
  );
};

export default Suggestions;
