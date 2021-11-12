import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}

function Navbar() {
  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" ClassName="nav-cont" component="div" sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
          <Typography variant="h6" ClassName="nav-cont" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" ClassName="nav-cont" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography>
          <InputLabel id="demo-simple-select-label">Shop</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem>All Products</MenuItem>
          <MenuItem>Popular Items</MenuItem>
          <MenuItem>New Arrivals</MenuItem>
        </Select>
        </Toolbar>
      </AppBar>
  )
}

function Intro() {
  return (
    <div id="intro-div">
      <p id="intro-title">Shop in Style <br></br> <span id="intro-span">With this shop homepage template</span></p> 
      <p></p>
    </div>
  )
}

export default App;
