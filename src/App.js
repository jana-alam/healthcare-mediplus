import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home/Home";
import Register from "./Pages/Home/Login/Register/Register";
import Login from "./Pages/Home/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AboutUs from "./Pages/AboutUs/AboutUs/AboutUs";
import AppointMent from "./Pages/AppointMent/AppointMent/AppointMent";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/about-us">
            <AboutUs></AboutUs>
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <AppointMent></AppointMent>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/services/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
