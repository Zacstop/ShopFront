import React, {PropsWithChildren} from "react";
import {makeStyles} from "@mui/styles";
import {AppBar, Badge, Box, Button, Grid, IconButton, InputBase, Toolbar, Typography} from "@mui/material";
import {AccountCircle, Menu, Search, ShoppingCart} from "@mui/icons-material";
import Link from "next/link";
import {useRecoilValue} from "recoil";
import {cartItemsInfoState} from "../states/CartItemsInfo";

interface Props {}

const styles = makeStyles(() => ({
  mainLogo: {
    minWidth: 120,
  },
  search: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "white",
    width: "100%",
  },
  styledInputBase: {
    color: "white",
    "& .MuiInputBase-input": {
      padding: "1, 1, 1, 0",
      paddingLeft: 10,
      width: "100%",
    },
  },
}))

export default function MainFrame({children}: PropsWithChildren<Props>) {
  const classes = styles()
  const cartInItem = useRecoilValue(cartItemsInfoState)

  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Grid container xs={4}>
          <Link href={'/'}>
            <a>
              <Typography variant={"h6"} className={classes.mainLogo} component={"div"}>
                Dalda Shop
              </Typography>
            </a>
          </Link>
        </Grid>
        <Search/>
        <Grid xs={4} container className={classes.search}>
          <Grid item xs={12} className={classes.styledInputBase}>
            <InputBase
              fullWidth={true}
              placeholder={"검색어를 입력하세요"}
              inputProps={{"aria-label": "search"}}
            />
          </Grid>
        </Grid>
        <Grid item xs={4} container justifyContent={"flex-end"}>
          <Box sx={{display: {xs: "none", md: "flex"}}}>
            <Button
              color={"inherit"}
              aria-label={"login"}
            >
              Login
            </Button>
          </Box>
          <Box sx={{display: {xs: "none", md: "flex"}}}>
            <IconButton
              size={"large"}
              aria-label={"shopping cart"}
              color={"inherit"}
            >
              <Link href={'/ShoppingCart/'}>
                <Badge badgeContent={cartInItem.length} color={"error"}>
                  <ShoppingCart/>
                </Badge>
              </Link>
            </IconButton>
          </Box>
          <Box sx={{display: {xs: "none", md: "flex"}}}>
            <IconButton
              size={"large"}
              aria-label={"user account"}
              aria-haspopup={"true"}
              color={"inherit"}
            >
              <AccountCircle/>
            </IconButton>
          </Box>
          <Box sx={{display: {xs: "none", md: "flex"}}}>
            <IconButton
              size={"large"}
              aria-label={"all menu"}
              aria-haspopup={"true"}
              color={"inherit"}
            >
              <Menu/>
            </IconButton>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}