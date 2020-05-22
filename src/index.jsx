import React from "react";
import ReactDOM from "react-dom";
import "sass/reset.scss";
import "sass/public.scss";

import App from "src/App";

console.log(process.env.REACT_APP_PUBLIC_URL)
console.log(process.env.REACT_APP_TEST)

ReactDOM.render(<App />, document.getElementById("app"));
