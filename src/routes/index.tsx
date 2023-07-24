import { FC } from "react";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Category from "../pages/category";
import Movie from "../pages/movie";
import GenrePage from "../pages/genre";
import Person from "../pages/person";
import Persons from "../pages/persons";

const LocalRoute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/person" element={<Persons />} />
      <Route path="/category/:type" element={<Category />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/genre/" element={<GenrePage />} />
      <Route path="/genre/:type" element={<Category />} />
      <Route path="/person/:id" element={<Person />} />
    </Routes>
  );
};

export default LocalRoute;
