import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* router step 1: npm i react-router-dom */}
    {/* router step 2 */}
    {/* atom stem 2 */}
  
      <BrowserRouter>
        <App />
      </BrowserRouter>
  
  </StrictMode>
);
