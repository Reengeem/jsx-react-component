import React from "react";
import { ProductData } from "./Product";

function Price() {
  return (
    <div>
      {ProductData.map((item) => (
        <div key={item.id}>{item.price}</div>
      ))}
    </div>
  );
}

export default Price;
