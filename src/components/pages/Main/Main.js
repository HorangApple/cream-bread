import React from "react";
import Routes from "routes/Routes";
import { MainLayout } from "components/templates";

const Main = () => {
  const contents = Routes;
  return (
    <div>
      <MainLayout />
    </div>
  );
};

export default Main;
