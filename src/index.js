import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElem = document.createElement("div");
rootElem.id = "root";
document.body.appendChild(rootElem);
const root = ReactDOM.createRoot(rootElem);
root.render(<App/>);