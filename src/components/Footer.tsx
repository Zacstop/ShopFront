import * as React from "react";
import {Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const styles = makeStyles(() => ({
  footer: {
    backgroundColor: "#1976d2",
    height: 40,
    width: "100%",
    textAlign: "center",
    position: "relative",
    bottom: 0,
    paddingTop: 10,
  },
}))

export default function Footer() {
  const classes = styles()

  return (
    <div className={classes.footer}>
      <Grid>
        <Typography color={"whitesmoke"}>
          Copyright by Andy - @Dalda Shop
        </Typography>
      </Grid>
    </div>
  )
}