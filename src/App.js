import "./App.css";
import Button from "@mui/material/Button";
import { Navbar } from "./Navbar";
import { Intro } from "./Intro";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import { useState } from "react";

function App() {
  const items = [
    {
      product: "Fancy Product",
      price1: "$40.00",
      price2: "$80.00",
    },
    {
      product: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
    },
    {
      product: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
    },
    {
      product: "Popular Item",
      price1: "$40.00",
      price2: "",
    },
    {
      product: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
    },
    {
      product: "Fancy Product",
      price1: "$123.00",
      price2: "$280.00",
    },
    {
      product: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
    },
    {
      product: "Popular Item",
      price1: "$40.00",
      price2: "",
    },
  ];
  const [cart, setCart] = useState(0);
  const addtocart = () => {
    setCart(cart + 1);
  }
  const removefromcart = () => {
    setCart(cart-1);
  }
  return (
    <div className="App">
      <Navbar cart={cart} />
      <Intro />
      <Distributer items={items} addtocart={addtocart} removefromcart={removefromcart}/>
    </div>
  );
}

function Distributer({items, addtocart, removefromcart}) {
  return (
      <div id="cardbox">
        {items.map((item) => {
          return (
            <Items
                product={item.product}
                price1={item.price1}
                price2={item.price2}
                addtocart={addtocart}
                removefromcart={removefromcart}
                />
          )
        })}
      </div>
  )
}

function Items({product, price1, price2, addtocart, removefromcart}) {
  
  const sale = product == "Sale Item" || product == "Special Item"  ? true : false;
  const style = { visibility: sale ? "block" : "hidden" } 
  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <div id="img">
          <Typography gutterBottom variant="h5" component="div">
              <div id="sale" style={style}>Sale</div>
              450 X 300
            </Typography>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sale ? <><span style={{textDecoration : "line-through"}}>{price1}</span> - {price2}</> : `${price1} - ${price2}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="small"  
            variant="outlined" 
            onClick = {() => addtocart()}
            >Add to cart</Button>
          <Button 
            size="small"  
            variant="outlined" 
            onClick = {() => removefromcart()}
            >Remove  cart</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
