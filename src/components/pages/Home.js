import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  home: {
    backgroundImage: `url("https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // width: "100vw",
    height: "100vw",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }
}));

export default function Home() {
  const classes = useStyles();
  return <div className={classes.home}>Home</div>;
}
