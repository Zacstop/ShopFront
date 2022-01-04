import * as React from "react";
import {Button, Divider, Grid, Rating, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useRecoilState} from "recoil";
import {useRouter} from "next/router";
import {cartItemsInfoState} from "../states/CartItemsInfo";
import {CartItemInfo} from "../model/CartItemInfo";

const styles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    padding: 60,
    minHeight: 912,
  },
  itemImage: {
    width: "500",
    height: 600,
    display: "block",
    marginLeft: 80,
    borderRadius: 30,
  },
  itemName: {
    paddingRight: 20,
  },
  itemPrice: {
    color: "#00bcd4",
  },
  information: {
    display: "flex",
    marginTop: 20,
  },
  benefits: {
    paddingLeft: 0,
    listStyle: "none",
  },
  beneTitle: {
    marginTop: 20,
  },
  beneInfo: {
    color: "gray",
  },
  itemDesc: {
    fontSize: 15,
    padding: 30,
  },
  product: {
    color: "red",
  },
  buyNowBtn: {
    marginRight: 10,
  },
}))

interface Props {
  item: CartItemInfo
}

export default function ItemDetail({item}: Props) {
  const classes = styles()
  const router = useRouter()
  const [inBasket, setInBasket] = useRecoilState(cartItemsInfoState)


  const buyNow = () => {
    setInBasket([item])
    return router.push(`/purchase/${item.id}`)
  }
  const putInItem = (data: CartItemInfo) => {
    setInBasket([
      ...inBasket,
      {
        id: data.id,
        brand: data.brand,
        category: data.category,
        description: data.description,
        image_link: data.image_link,
        name: data.name,
        price: data.price,
        product_type: data.product_type,
        rating: data.rating,
      },
    ])
    alert('상품이 장바구니에 담겼습니다')
  }

  return (
    <>
      <div className={classes.wrapper}>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <img src={item.image_link} className={classes.itemImage}/>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={"h3"} className={classes.itemName}>{item.name}</Typography>
            <br/>
            <Typography variant={"h4"} className={classes.itemPrice}>${item.price}</Typography>
            <div>
              <div className={classes.information}>
                <strong>배송 정보</strong>
                <ul className={classes.benefits}>
                  <li className={classes.beneTitle}>
                    <span>일반 배송</span>
                    <div className={classes.beneInfo}>
                      2,500원 ( 20,000 원 이상 무료배송 )
                      달다쇼핑 배송 평균 3일 이내 배송
                    </div>
                  </li>
                  <li className={classes.beneTitle}>
                    <span>당일 배송</span>
                    <div className={classes.beneInfo}>
                      3,000원 또는 5,000원
                    </div>
                  </li>
                </ul>
              </div>
              <div className={classes.information}>
                <strong>결제 혜택</strong>
                <ul className={classes.benefits}>
                  <li className={classes.beneTitle}>
                    <span>카드 혜택</span>
                    <div className={classes.beneInfo}>
                      THE 회원 카드 추가 10%할인 카드혜택가 포인트 최대 2% 적립 예상
                    </div>
                  </li>
                </ul>
              </div>
              <strong>고객 평가: </strong>
              <Rating name="product-rating" defaultValue={item.rating} precision={0.5} readOnly/>
            </div>
            <p className={classes.product}>Category: {item.product_type}</p>
            <Button
              variant={"contained"}
              className={classes.buyNowBtn}
              onClick={buyNow}
            >
              바로 구매
            </Button>
            <Button
              variant={"contained"}
              color={"error"}
              onClick={() => putInItem(item)}
            >
              장바구니에 담기
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.itemDesc}>
        <Divider/>
        <Typography variant={"h6"}>Description</Typography>
        <p>{item.description}</p>
      </div>
    </>
  )
}
