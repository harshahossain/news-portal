import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("general");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout setCategory={setCategory} />,
      children: [
        { index: true, element: <HomePage category={category} /> },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
