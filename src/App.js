import "./App.css";
import "../src/components/materialUi/materialUi";
import MaterialUi from "../src/components/materialUi/materialUi";
import Mechanic from "./components/Mechanic/Mechanic";
import MechanicManu from "./components/Mechanic/MechanicManu";
import MechanicBrand from "./components/Mechanic/MechanicBrand";
import MechanicFuel from "./components/Mechanic/MechanicFuel";
import Routes from "./components/routes/Route";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {/* <MaterialUi /> */}
      {/* <Mechanic /> */}
      {/* <Routes /> */}

      <Switch>
        <Route exact path="/" component={Mechanic} />
        <Route path="/MechanicManu" component={MechanicManu} />
        <Route path="/MechanicBrand" component={MechanicBrand} />
        <Route path="/MechanicFuel" component={MechanicFuel} />
      </Switch>
    </>
  );
}

export default App;
