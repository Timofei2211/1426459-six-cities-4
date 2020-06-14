import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const setting = {
  offersCount: 48,
};

ReactDOM.render(
    <App offerCount = {setting.offersCount}
    />,
    document.querySelector(`#root`)
);
