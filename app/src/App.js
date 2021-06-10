// import Main from "./Pages/Main";
import Manager from "./Pages/Manager";
import Main from "./Pages/Main";
// import PageTemplate from "./Template";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageTemplate from "./Template";

function App() {
  return (
    <PageTemplate>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/manage" component={Manager} />
        </Switch>
      </Router>
    </PageTemplate>
  );
}

export default App;
