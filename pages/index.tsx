import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import ADBanner from "../src/components/ADBanner";
import ItemList from "../src/components/ItemList";
import LoadingProgress from "../src/components/LoadingProgress";

export default function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function getData() {
    const res = await fetch('/api/item')
    const data = await res.json()
    setItems(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {isLoading && true ?
        <LoadingProgress/>
        :
        <Grid item xs={12}>
          <ADBanner/>
          <ItemList list={items}/>
        </Grid>
      }
    </div>
  )
}