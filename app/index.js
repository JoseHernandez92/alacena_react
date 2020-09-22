import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as  Router } from 'react-router-dom'

import App from "./src/app";
import "@babel/polyfill";

import "./styles/index.css"
import "./styles/header.css"
import "./styles/newList.css"

ReactDOM.render(<Router><App/></Router>, document.getElementById("root"));
