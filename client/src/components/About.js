import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import enjoy from "../img/stick-man.png";

const useStyles = makeStyles(theme => ({
  descOne: {
    fontSize: "150px",
    color: "#fff",
    textShadow: "5px 5px 1px black",
    position: "absolute",
    top: "0px",
    left: "50px"
  },
  people: {
    position: "absolute",
    bottom: "0px",
    left: "200px"
  },
  descTwo: {
    fontSize: "150px",
    color: "#fff",
    textShadow: "5px 5px 1px black",
    position: "absolute",
    bottom: "100px",
    right: "50px"
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <>
      <svg
        width="1920"
        height="446"
        viewBox="0 0 1920 446"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 21H1948.71C1948.71 21 2309.36 343.753 1948.71 335.246C1588.07 326.74 1475.74 86.051 973.003 335.246C470.262 584.442 379.932 335.246 0 335.246V21Z"
          fill="white"
        />
        <path
          d="M0 0H1948.71C1948.71 0 2309.36 322.753 1948.71 314.246C1588.07 305.74 1475.74 65.051 973.003 314.246C470.262 563.442 379.932 314.246 0 314.246V0Z"
          fill="#8BC34C"
        />
      </svg>
      <h1 className={classes.descOne}>WE MAKE</h1>
      <img src={enjoy} alt="Happy people" className={classes.people} />
      <h1 className={classes.descTwo}>PEOPLE HAPPY</h1>
      <Typography component="div"></Typography>
    </>
  );
};
