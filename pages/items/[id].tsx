import ItemDetail from "../../src/components/ItemDetail";
import {productData} from "../api/data";
import {CartItemInfo} from "../../src/model/CartItemInfo";

interface Props {
  item: CartItemInfo
}

const Item = ({item}: Props) => {
  return <ItemDetail item={item}/>
}

export async function getServerSideProps(context: { params: { id: number } }) {
  const id = context.params.id
  const data = productData.filter((item) => item.id === Number(id))
  const item = data[0]

  return {
    props: {
      item
    }
  }
}

export default Item
