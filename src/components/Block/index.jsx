import React from "react";
import "./block.less";

const Block = ({ item }) => {
  return (
    <div className="block">
      <p className="block-title">{item.title}</p>
      <p className={`block-number ${item.color}`}>{item.number}</p>
    </div>
  );
};

export default Block;
