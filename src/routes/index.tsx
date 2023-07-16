import { FC } from "react";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";

const LocalRoute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:type" element={<Home />} />
    </Routes>
  );
};

export default LocalRoute;
