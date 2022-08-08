import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Teapot from "./Teapot";

function RouterConfig () {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="teapot" element={<Teapot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default RouterConfig;