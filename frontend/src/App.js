import "./App.css";
import DatePicker from "./components/DatePicker";
import AppointmentScreen from "./Screens/AppointmentScreen.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <Router>
      <Header>
        <div>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/appointment" component={AppointmentScreen} exact />

        </div>
      </Header>
    </Router>
  );
}

export default App;
