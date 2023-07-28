import React, { FC } from "react";
import LocalRoute from "./routes";
import { Toaster } from "react-hot-toast";

const App: FC = () => {
  return (
    <>
      <LocalRoute />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName="font-lato"
      />
    </>
  );
};

export default App;
