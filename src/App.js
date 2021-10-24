import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  NewFeedback,
  FeedbackDetail,
  RoadmapPage,
  EditFeedback,
} from "./pages";
import { SuggestionsProvider } from "./contexts/SuggestionsContext";

function App() {
  return (
    <SuggestionsProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/newfeedback" component={NewFeedback} />
          <Route path="/feature/:id" component={FeedbackDetail} />
          <Route path="/edit-feedback/:id" component={EditFeedback} />
          <Route path="/roadmap" component={RoadmapPage} />
        </Switch>
      </Router>
    </SuggestionsProvider>
  );
}

export default App;
