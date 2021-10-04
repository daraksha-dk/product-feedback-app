// import styled from "styled-components";
import Suggestions from "./components/HomePage/Suggestions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RoadmapPage from "./components/Roadmap/RoadmapPage";
import NewFeedback from "./components/Feedback/NewFeedback";

//add components
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Suggestions} />
          <Route path="/newfeedback" component={NewFeedback} /> 
          <Route path="/roadmap" component={RoadmapPage} /> 
        </Switch>


        {/* Feedback detail */}
        {/* Add feedback page */}
        {/* Edit feeback */}
        {/* Roadmap */}
      </div>
    </Router>
  );
}

export default App;
