import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as  Router } from 'react-router-dom'

import App from "./app";
import './localization'
global.i18n = localization.es

import "../styles/index.css"

ReactDOM.render(<Router><App/></Router>, document.getElementById("root"));
