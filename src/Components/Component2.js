import React from "react";
import Component3 from "./Component3";
import classes from "./Component2.module.css";
const Component2 = (props) => {
  return (
    <div className={classes.main}>
      <h1 className={classes.titles}>Overall Team</h1>
      <div className={classes.overall}>
        {props.data.map((item) => {
          return (
            <Component3
              key={item.id}
              name={item.name}
              company={item.company}
              desc={item.desc}
            />
          );
        })}
      </div>
      <h1 className={classes.titles}>Seniors</h1>
      <div className={classes.senior}>
        {props.data.map((item) => {
          return (
            item.senior && (
              <Component3
                key={item.id}
                name={item.name}
                company={item.company}
                desc={item.desc}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Component2;
