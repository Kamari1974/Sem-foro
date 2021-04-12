import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Semaforo } from "./component/semaforo";

//render your react application
ReactDOM.render(<Semaforo />, document.querySelector("#app"));