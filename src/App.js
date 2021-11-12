import "./App.css";
import Button from "@mui/material/Button";
import { Navbar } from "./Navbar";
import { Intro } from "./Intro";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';

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
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Distributer items={items}/>
    </div>
  );
}

function Distributer({items}) {
  return (
    <div id="cardbox">
      {items.map((item) => {
        return (
          <Items 
              product={item.product}
              price1={item.price1}
              price2={item.price2}
              />
        )
      })}
    </div>
  )
}

function Items({product, price1, price2}) {
  const sale = product == "Sale Item" || product == "Special Item"  ? true : false;
  console.log(sale)
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
            {price1} - {price2}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">Add to cart</Button>
          <Button size="small" variant="outlined">Remove  cart</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
