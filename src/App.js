import React, { Suspense, lazy } from "react";
import "../src/styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";

// Lazy load the AppRouter component
const AppRouter = lazy(() => import("./AppRouter"));

function App() {
  return (
    <BrowserRouter
      basename={process.env.NODE_ENV === "production" ? "/triptopia" : "/"}
    >
      {/* Suspense provides a fallback UI while AppRouter is loading */}
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
