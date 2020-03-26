import React from "react";
import ReactLoading from "react-loading";
import BlockList from "../../components/BlockList";
import getState from "../../utils/getState";
import "./tracker.less";

const Tracker = ({ url, country }) => {
  const { items, error, loaded } = getState(url);

  if (error) return <p>Error...</p>;
  if (items)
    return (
      <div className="tracker">
        <h1 className="tracker-title">{country} Tracker</h1>
        <BlockList items={items} />
      </div>
    );
  return (
    <ReactLoading type="bubbles" color="black" height={80} width={80} />
  );
};

export default Tracker;
