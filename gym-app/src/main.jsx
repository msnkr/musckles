import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowExercise from "./pages/ShowExercise.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: ":id", element: <ShowExercise /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
