import { FC } from "react";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";
import Category from "../pages/category";

const LocalRoute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:type" element={<Category />} />
    </Routes>
  );
};

export default LocalRoute;
