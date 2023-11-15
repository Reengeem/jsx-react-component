import React from "react";
import { ProductData } from "./Product";

function Name() {
  return (
    <div>
      {ProductData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Name;
