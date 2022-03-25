import "./App.css";
import { useState } from "react";
import { Home } from "./components/Home";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { CartContext } from "./contexts/cart";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={cart}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>My Shop</Navbar.Brand>
            <Navbar.Brand className="justify-content-end">{`My shopping cart: ${cart.length}`}</Navbar.Brand>
          </Container>
        </Navbar>
        <Home setCart={setCart} />
      </CartContext.Provider>
    </div>
  );
}

export default App;
