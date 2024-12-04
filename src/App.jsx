import React from "react";
import Hero from "./components/Hero/Hero";
import Uses from "./components/Uses/Uses";
import Trust from "./components/Password/Trust";
import Applyout from "./components/ui/Applyout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import YouTubeVideoPage from "./components/YouTube/Youtube";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applyout />,
      // errorElement: <Error />,
      children: [
        {
          path: "/",
          element: (
            <div className="pt-10">
              <Hero />,
              <Uses />
            </div>
          ),
        },

        {
          path: "/Trust",
          element: <Trust />,
        },
        {
          path: "/Youtube",
          element: <YouTubeVideoPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
