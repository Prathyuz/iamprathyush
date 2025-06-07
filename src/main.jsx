// At the top of your file
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Dynamic import with proper error handling
if (typeof window !== "undefined") {
  import("smoothscroll-polyfill")
    .then((module) => module.polyfill())
    .catch((err) =>
      console.error("Failed to load smoothscroll polyfill:", err)
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
