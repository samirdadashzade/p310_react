import React from "react";

export const Post = props => {
  return (
    <div onClick={props.clickHandler} className="Post">
      <h2>{props.item.title}</h2>
      <p>{props.item.content}</p>
      <span className="counter">{props.item.count}</span>
    </div>
  );
};
