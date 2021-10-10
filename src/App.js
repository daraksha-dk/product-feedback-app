// import styled from "styled-components";
import Suggestions from "./pages/Suggestions";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RoadmapPage from "./components/Roadmap/RoadmapPage";
import NewFeedback from "./components/Feedback/NewFeedback";
import FeedbackDetail from "./components/Feedback/FeedbackDetail";

//add components
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Suggestions} />
          <Route path="/newfeedback" component={NewFeedback} />
          <Route path="/feature/:id" component={FeedbackDetail} />
          {/* Route edit feedback */}
          <Route path="/roadmap" component={RoadmapPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
