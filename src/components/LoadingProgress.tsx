import {CircularProgress} from "@mui/material";
import {makeStyles} from "@mui/styles";

const styles = makeStyles(() => ({
  loading: {
    textAlign: "center",
    height: "89vh",
    lineHeight: 50,
  },
  progress: {
    margin: 0,
  },
}))

export default function LoadingProgress() {
  const classes = styles()

  return (
    <div className={classes.loading}>
      <div className={classes.progress}>
        <CircularProgress/>
      </div>
    </div>
  )
}