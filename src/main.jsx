import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./style/app.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
    
  </StrictMode>
);