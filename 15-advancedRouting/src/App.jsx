import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import { Routes, Route } from "react-router-dom";
import Notfound from "./Pages/Notfound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import CourseDetails from "./Pages/CourseDetails";
import Course from "./Pages/Course";
import Navbar2 from "./Components/Navbar2";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/Product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
