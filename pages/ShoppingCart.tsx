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
import {cartItemGetterState} from "../src/states/CartItemsInfo";
import {useRecoilValue} from "recoil";

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

export default function ShoppingCart() {
  const classes = styles()
  const itemsInfo = useRecoilValue(cartItemGetterState)

  return (
    <div className={classes.wrapper}>
      <div className={classes.titleDiv}>
        <Typography className={classes.pageTitle}>CART</Typography>
        <Divider/>
      </div>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <TableContainer component={Paper} className={classes.shoppingTable}>
            <Table>
              <TableHead className={classes.headColor}>
                <TableRow>
                  <TableCell>제품명</TableCell>
                  <TableCell align="center">브랜드</TableCell>
                  <TableCell align="center">제품 품목</TableCell>
                  <TableCell align="center">카테고리</TableCell>
                  <TableCell align="center">가격</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!itemsInfo.length && (
                  <TableRow>
                    <TableCell>장바구니에 상품이 존재하지 않습니다</TableCell>
                  </TableRow>
                )}
                {itemsInfo.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell component="th" scope="row">{data.name}</TableCell>
                    <TableCell align="center">{data.brand}</TableCell>
                    <TableCell align="center">{data.category}</TableCell>
                    <TableCell align="center">{data.product_type}</TableCell>
                    <TableCell align="center">${data.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
            <Button
              variant={"contained"}
              className={classes.btnStyle}
              color={"success"}
            >
              <Link href={'/PurchaseComplete'}>
                <a>결제하기</a>
              </Link>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
