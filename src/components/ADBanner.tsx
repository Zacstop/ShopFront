import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";

const styles = makeStyles(() => ({
  innerImage: {
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  ADBanner: {
    height: 700,
    width: "100%",
    display: "block",
    marginTop: 130,
  },
  ADImages: {
    display: "inline-block",
    width: "33.333% - 20px",
    marginLeft: 42,
    marginRight: 30,
    listStyle: "none",
    float: "left",
    "& li(:last-child)": {
      marginRight: 0,
    },
  },
  bannerFont: {
    top: 200,
    left: 200,
    position: "absolute",
    color: "whitesmoke",
  },
}))

export default function ADBanner() {
  const classes = styles()

  return (
    <>
      <div className={classes.innerImage}>
        <img src={"https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/6141158764154773106.jpg"} alt={"MainBanner"}/>
        <div className={classes.bannerFont}>
          <Typography variant={"h1"}>Dalda Shop</Typography>
          <p>달다 샵: 이제 쇼핑도 달달하게!</p>
        </div>
      </div>
      <div className={classes.ADBanner}>
        <ul>
          <li className={classes.ADImages}>
            <img src={"http://jogunshop.img18.kr/web/upload/main/bigsize3_banner01.jpg"} alt={"Banner1"}/>
          </li>
          <li className={classes.ADImages}>
            <img src={"http://jogunshop.img18.kr/web/upload/main/delivery2_banner02.jpg"} alt={"Banner2"}/>
          </li>
          <li className={classes.ADImages}>
            <img src={"http://jogunshop.img18.kr/web/upload/main/onemilewear3_banner03.jpg"} alt={"Banner3"}/>
          </li>
        </ul>
      </div>
    </>
  )
}