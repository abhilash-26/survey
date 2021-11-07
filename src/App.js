import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/create-survey" component={Survey} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
