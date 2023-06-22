import React from "react";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
