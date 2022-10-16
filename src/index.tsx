import { Component, render } from "preact";
import App from "./scripts/app";
import "./styles/main.scss";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

render(<App />, document.getElementById("app"));