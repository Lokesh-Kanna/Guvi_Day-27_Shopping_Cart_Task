import './App.css';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Navbar } from './Navbar';
import { Intro } from './Intro';

function App() {
  const items = [
    {
      product: "Fancy Product",
      price1: "$40.00",
      price2: "$80.00"
    },
    {
      product: "Special Item",
      price1: "$20.00",
      price2: "$18.00"
    },
    {
      product: "Sale Item",
      price1: "$50.00",
      price2: "$25.00"
    },
    {
      product: "Popular Item",
      price1: "$40.00",
      price2: ""    
    },
    {
      product: "Sale Item",
      price1: "$50.00",
      price2: "$25.00"
    },
    {
      product: "Fancy Product",
      price1: "$123.00",
      price2: "$280.00"
    },
    {
      product: "Special Item",
      price1: "$20.00",
      price2: "$18.00"
    },
    {
      product: "Popular Item",
      price1: "$40.00",
      price2: ""
    }
  ];
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}

function Items() {
  return (
    <div>

    </div>
  )
}

export default App;
