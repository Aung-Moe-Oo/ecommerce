import React from "react";
import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Thanks for purchasing.</h1>
    </div>
  );
};

export default Success;
