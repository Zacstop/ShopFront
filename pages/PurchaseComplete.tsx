import * as React from "react";
import {
  Button,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Link from "next/link";
import {useRecoilValue} from "recoil";
import {cartItemsInfoState} from "../src/states/CartItemsInfo";

const styles = makeStyles(() => ({
  wrapper: {
    padding: 70,
    marginBottom: 380,
  },
  titleDiv: {
    marginBottom: 25,
  },
  pageTitle: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  shoppingTable: {
    maxWidth: 1100,
    margin: "auto",
  },
  headColor: {
    backgroundColor: "whitesmoke",
  },
  btnGroup: {
    textAlign: "center",
    marginTop: 20,
  },
  btnStyle: {
    width: 300,
    height: 55,
    margin: 10,
  },
}))

export default function PurchaseComplete() {
  const classes = styles()
  const itemsInfo = useRecoilValue(cartItemsInfoState)

  return (
    <div className={classes.wrapper}>
      <div className={classes.titleDiv}>
        <Typography className={classes.pageTitle}>결제가 완료되었습니다. 이용해 주셔서 감사합니다.</Typography>
        <Divider/>
      </div>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <TableContainer className={classes.shoppingTable}>
            <Typography variant={"h6"} padding={2}>구매 목록</Typography>
            <Paper elevation={8}>
              <Table>
                <TableHead className={classes.headColor}>
                  <TableRow>
                    <TableCell>제품명</TableCell>
                    <TableCell align="center">브랜드</TableCell>
                    <TableCell align="center">가격</TableCell>
                    <TableCell align="center">제품 품목</TableCell>
                    <TableCell align="center">카테고리</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {itemsInfo.map((info) => (
                    <TableRow key={info.id}>
                      <TableCell component="th" scope="row">{info.name}</TableCell>
                      <TableCell align="center">{info.brand}</TableCell>
                      <TableCell align="center">{info.product_type}</TableCell>
                      <TableCell align="center">{info.category}</TableCell>
                      <TableCell align="center">${info.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </TableContainer>
          <div className={classes.btnGroup}>
            <Button
              variant={"contained"}
              className={classes.btnStyle}
              color={"secondary"}
            >
              <Link href={'/'}>
                <a>더 둘러보기</a>
              </Link>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
