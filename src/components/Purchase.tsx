import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useRecoilValue} from "recoil";
import {cartItemsInfoState} from "../states/CartItemsInfo";
import {ChangeEvent, useState} from "react";
import {useRouter} from "next/router";

const styles = makeStyles(() => ({
  wrapper: {
    padding: 70,
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
  deliInfoContainer: {
    margin: "auto",
    marginBottom: 20,
  },
  deliTitle: {
    padding: 30,
    width: "100%",
  },
  deliInner: {
    margin: "auto",
    padding: 30,
    width: 750,
  },
  shortText: {
    width: "45%",
    marginTop: 10,
  },
  longText: {
    width: "90%",
    marginTop: 10,
  },
  purchaseContainer: {
    margin: "auto",
  },
  purchaseTitle: {
    padding: 30,
  },
  purchaseInner: {
    margin: "auto",
    marginTop: 20,
    padding: 30,
  },
  tableHead: {
    backgroundColor: "whitesmoke",
  },
  purchaseTable: {
    minWidth: 700,
    margin: "auto",
  },
  purchaseChose: {
    padding: 20,
    marginTop: 10,
  },
  btnForm: {
    textAlign: "right",
    marginTop: 20,
  },
  btnStyle: {
    width: 110,
    margin: 10,
  },
}))

export default function Purchase() {
  const classes = styles()
  const router = useRouter()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [savedButtonDisabled, setSaveButtonDisabled] = useState(true)
  const [initialValues] = useState({name: name, address: address, phone: phone})
  const itemInfo = useRecoilValue(cartItemsInfoState)


  const nameValidation = () => {
    const checkKor = /[0-9]/
    return checkKor.test(name)
  }
  const addressValidation = () => {
    const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣 a-z | A-Z]/
    return checkKor.test(address)
  }
  const phoneValidation = () => {
    const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣 a-z | A-Z]/
    return checkKor.test(phone)
  }

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (4 < value.length && value) return
    setSaveButtonDisabled(
      JSON.stringify(initialValues) ===
      JSON.stringify({
        ...initialValues,
        name: value,
      })
    )
    setName(event.target.value)
  }

  const changeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (5 < value.length && value) return
    setSaveButtonDisabled(
      JSON.stringify(initialValues) ===
      JSON.stringify({
        ...initialValues,
        address: value,
      })
    )
    setAddress(event.target.value)
  }

  const changePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (11 < value.length && value) return
    setSaveButtonDisabled(
      JSON.stringify(initialValues) ===
      JSON.stringify({
        ...initialValues,
        phone: value,
      })
    )
    setPhone(event.target.value)
  }

  const buy = () => {
    if (!name.length) {
      alert('필수 요소를 전부 입력해주십시오')
    }
    if (!phone.length && !address.length) {
      alert('필수 요소를 전부 입력해주십시오')
    }
    if (name.length && address.length && phone.length) {
      return router.push('/PurchaseComplete')
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.titleDiv}>
        <Typography className={classes.pageTitle}>결제 페이지</Typography>
        <Divider/>
      </div>
      <Grid container component={"form"}>
        <Grid item xs={12}>
          <Grid container xs={6} className={classes.deliInfoContainer}>
            <div>
              <Typography variant={"h6"} className={classes.deliTitle}>청구 및 배송정보</Typography>
              <Divider/>
              <Grid item xs={12} className={classes.deliInner}>
                <Grid>
                  <Typography>이름</Typography>
                  <TextField
                    label={"이름"}
                    variant={"outlined"}
                    className={classes.shortText}
                    value={name}
                    onChange={changeName}
                    error={nameValidation()}
                    required
                  />
                </Grid>
                <Grid>
                  <Typography>주소</Typography>
                  <TextField
                    label={"우편번호"}
                    variant={"outlined"}
                    className={classes.shortText}
                    onChange={changeAddress}
                    error={addressValidation()}
                    required
                  />
                  <TextField label={"기본주소"} variant={"outlined"} className={classes.longText}/>
                  <TextField label={"상세주소"} variant={"outlined"} className={classes.longText}/>
                </Grid>
                <Grid>
                  <Typography>전화번호</Typography>
                  <TextField
                    label={"전화번호"}
                    variant={"outlined"}
                    className={classes.shortText}
                    onChange={changePhone}
                    error={phoneValidation()}
                    required
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid container xs={6} className={classes.purchaseContainer}>
            <Paper elevation={12}>
              <Typography variant={"h6"} className={classes.purchaseTitle}>결제하실 금액</Typography>
              <Grid item xs={12} className={classes.purchaseInner}>
                <Grid>
                  <TableContainer component={Paper} className={classes.purchaseTable}>
                    {itemInfo.map((data) => (
                      <Table>
                        <TableHead className={classes.tableHead}>
                          <TableRow>
                            <TableCell align={"left"}>구매 목록</TableCell>
                            <TableCell/>
                          </TableRow>
                        </TableHead>
                        <TableBody key={data.id}>
                          <TableRow>
                            <TableCell component={"th"} scope={"row"}>{data.name}</TableCell>
                            <TableCell align={"center"}>${data.price}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component={"th"} scope={"row"}>총 상품 금액</TableCell>
                            <TableCell align={"center"}>${data.price}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component={"th"} scope={"row"}>10% 추가 할인 이벤트</TableCell>
                            <TableCell align={"center"}> - ${data.price * 10 / 100}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component={"th"} scope={"row"}>배송비</TableCell>
                            <TableCell align={"center"}>$3</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component={"th"} scope={"row"}>총 결제 금액</TableCell>
                            <TableCell align={"center"}>${data.price - data.price * 10 / 100}</TableCell>
                          </TableRow>
                          <TableRow>
                            <FormControl component={"fieldset"} className={classes.purchaseChose}>
                              <FormLabel component={"legend"}>결제 방법</FormLabel>
                              <RadioGroup aria-label={"purchaseCase"} defaultValue={"Card"}>
                                <FormControlLabel value={"Card"} control={<Radio/>} label={"신용 & 체크카드 결제"}/>
                                <FormControlLabel value={"BankBook"} control={<Radio/>} label={"무통장 입금"}/>
                                <FormControlLabel value={"Other"} control={<Radio/>} label={"간편 결제 (카카오페이, 토스)"}/>
                              </RadioGroup>
                            </FormControl>
                          </TableRow>
                        </TableBody>
                      </Table>
                    ))}
                  </TableContainer>
                  <div className={classes.btnForm}>
                    <Button
                      variant={"contained"}
                      color={"success"}
                      className={classes.btnStyle}
                      onClick={buy}
                      disabled={savedButtonDisabled}
                    >
                      결제하기
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}