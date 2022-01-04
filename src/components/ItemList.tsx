import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Box, Divider, Grid, Typography} from "@mui/material";
import Link from "next/link";
import {CartItemInfo} from "../model/CartItemInfo";

const styles = makeStyles(() => ({
  listContainer: {
    justifyContent: "center",
  },
  inner: {
    width: "60%",
    marginTop: 20,
  },
  itemContainer: {
    textAlign: "center",
    justifyItems: "center",
    paddingBottom: 20,
    marginTop: 10
  },
  itemImage: {
    display: "block",
    margin: "0px auto",
  },
  itemInfo: {
    color: "#00bcd4",
    overflow: "hidden",
    margin: "10px, auto",
    width: 160,
  },
  productType: {
    margin: 8,
    color: "#999",
  },
  priceInfo: {
    fontWeight: 17,
    fontSize: 17,
  },
}))

interface Props {
  list: CartItemInfo[]
}

export default function ItemList({list}: Props) {
  const classes = styles()

  return (
    <div>
      <Grid container className={classes.listContainer}>
        <Box className={classes.inner}>
          <Typography variant={"h6"}>이달의 인기 상품</Typography>
          <Divider/>
          <Grid container columns={12}>
            {list.map((item) => (
              <Grid item xs={3} key={item.id} className={classes.itemContainer}>
                <Link href={`/items/${item.id}`}>
                  <a>
                    <img src={item.image_link} className={classes.itemImage} alt={"itemImage"}/>
                    <strong className={classes.itemInfo}>{item.name}</strong>
                    <p className={classes.productType}>{item.product_type}</p>
                    <strong className={classes.priceInfo}>${item.price}</strong>
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </div>
  )
}