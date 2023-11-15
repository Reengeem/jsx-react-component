import React from "react";
import { ProductData } from "./Product";

const Description = () => {
  return (
    <div>
      {ProductData.map((item) => (
        <div key={item.id}>{item.description}</div>
      ))}
    </div>
  );
};

export default Description;
