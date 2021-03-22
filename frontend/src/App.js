import "./App.css";
import AppointmentScreen from "./Screens/AppointmentScreen.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./components/Header"
import RegisterScreen from "./Screens/RegisterScreen";
import TestScreen from "./Screens/TestScreen";

function App() {
  return (
    <Router>
      <Header/>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/appointment" component={AppointmentScreen} exact />
        <Route path="/test" component={TestScreen} exact />
    </Router>
  );
}

export default App;
