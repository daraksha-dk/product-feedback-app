import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoadmapPage from "./pages/RoadmapPage";
import NewFeedback from "./pages/NewFeedback";
import FeedbackDetail from "./pages/FeedbackDetail";
import { SuggestionsProvider } from "./contexts/SuggestionsContext";

function App() {
  return (
    <SuggestionsProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/newfeedback" component={NewFeedback} />
          <Route path="/feature/:id" component={FeedbackDetail} />
          {/* Route edit feedback */}
          <Route path="/roadmap" component={RoadmapPage} />
        </Switch>
      </Router>
    </SuggestionsProvider>
  );
}

export default App;
