import React from "react";
import { ProductData } from "./Product";

const Image = () => {
  return (
    <div>
      {ProductData.map((item) => (
        <div key={item.id}>
          <img src={item.prodImg} alt="5 Bedroom Duplex" />
        </div>
      ))}
    </div>
  );
};

export default Image;
