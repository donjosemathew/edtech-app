import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import SignUpComponent from "./components/signUp/signup";
import Coursepreview from "./components/course-preview/course-preview";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/signin" component={Login} />
        </Switch>
        <Switch>
          <Route path="/signup" component={SignUpComponent} />
        </Switch>
        <Switch>
          <Route path="/course/:id" component={Coursepreview} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
