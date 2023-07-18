import { FC } from "react";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Category from "../pages/category";
import Movie from "../pages/movie";

const LocalRoute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:type" element={<Category />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/tv/:type" element={<Movie />} />
    </Routes>
  );
};

export default LocalRoute;
