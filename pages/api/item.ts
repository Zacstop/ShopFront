import type {NextApiRequest, NextApiResponse} from "next";
import {productData} from "./data";

type ProductData = {}

export default function handler( req: NextApiRequest, res: NextApiResponse<ProductData> ) {
  res.status(200).json(productData)
}
