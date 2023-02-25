import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";

const RouterApp = () => {
  return (
    <Routes>
      {/* { <Route exact path="/posts/:id" element={<SinglePostPage />}></Route>
      <Route path="/about" element={<About />}></Route> } */}
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default RouterApp;
