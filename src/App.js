import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails/ServiceDetails";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
