import * as React from "react";
import { render } from "react-dom";
import App from "./App";


(async () => {

  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("app-root"),
  );
})().catch(
  (err) => console.error(err),
);
