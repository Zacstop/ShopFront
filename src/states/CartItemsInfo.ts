import {CartItemInfo} from "../model/CartItemInfo";
import {atom, selector} from "recoil";

export const cartItemsInfoState = atom<CartItemInfo[]>({
  key: "cartItemsInfoState",
  default: [],
})

export const cartItemGetterState = selector({
  key: "cartItemGetterState",
  get: ({get}) => {
    return get(cartItemsInfoState)
  },
})