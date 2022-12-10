import React from "react";
import classes from "./Component3.module.css";
const Component3 = (props) => {
  //   console.log(props.name);
  return (
    <div className={classes["main-component"]}>
      <h3 className={classes.name}>{props.name}</h3>
      <p className={classes.company}>{`@${props.company}`}</p>
      <p className={classes.desc}>{props.desc}</p>
    </div>
  );
};

export default Component3;
