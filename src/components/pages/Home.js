import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import HomeSearch from "../HomeSearch";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 450,
    paddingRight: 250,
    opacity: 0.8,
  },

  search: {
    alignItems: "center",
    paddingTop: 270,
  },
  home: {
    backgroundImage: `url("https://images.unsplash.com/photo-1585432959449-b1c9c8cc49ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.search}>
          <Grid item xs={6}>
            <HomeSearch />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              style={{
                backgroundColor: "blue",
                marginTop: 20,
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
