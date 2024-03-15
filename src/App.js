import "./App.css";
import Home from "./Weather/Home";
import Navbar from "./Weather/Navbar";
import Weather from "./Weather/Weather";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Weather">
            <Weather></Weather>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
