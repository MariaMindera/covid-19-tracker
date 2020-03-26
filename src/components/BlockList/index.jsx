import React from "react";
import Block from "../Block";
import "./blockList.less";

const BlockList = ({ items }) => {
  return (
    <div className="blockList">
      <Block
        item={{
          title: "Confirmed",
          number: items.confirmed.value,
          color: "grey"
        }}
      />
      <Block
        item={{
          title: "Recovered",
          number: items.recovered.value,
          color: "green"
        }}
      />
      <Block
        item={{
          title: "Deaths",
          number: items.deaths.value,
          color: "red"
        }}
      />
    </div>
  );
};

export default BlockList;
