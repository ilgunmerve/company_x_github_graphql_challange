import "./App.scss";
import { MainIssuesPage } from "./components/MainIssuesPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { IssueDetail } from "./components/IssueDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={MainIssuesPage}></Route>
          <Route path="/issues/:id" component={IssueDetail}></Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
      {/* <MainIssuesPage /> */}
    </div>
  );
}

export default App;
