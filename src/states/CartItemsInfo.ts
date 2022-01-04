import {CartItemInfo} from "../model/CartItemInfo";
import {atom} from "recoil";

export const cartItemsInfoState = atom<CartItemInfo[]>({
  key: "cartItemsInfoState",
  default: [],
})
