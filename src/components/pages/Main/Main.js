import React from "react";
import Routes from "routes/Routes";
import { MainLayout } from "components/templates";
import { SideBar } from "components/organisms";

const Main = () => {
  return (
    <div>
      <MainLayout Side={SideBar} Contents={Routes} />
    </div>
  );
};

export default Main;
