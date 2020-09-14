import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as  Router } from 'react-router-dom'

import App from "./src/app";

import "./styles/index.css"
import "./styles/header.css"
import "./styles/home.css"
import "./styles/products.css"
import "./styles/categories.css"

ReactDOM.render(<Router><App/></Router>, document.getElementById("root"));
