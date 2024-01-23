import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme, MantineProvider } from "@mantine/core";
import App from "./App";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "Roboto, sans-serif",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
