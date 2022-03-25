import "./App.css";
import { useState } from "react";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { CartContext } from "./contexts/cart";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={cart}>
        <Navbar bg="dark" variant="dark" style={{ marginBottom: "2rem" }}>
          <Container>
            <Navbar.Brand>My Shop</Navbar.Brand>
            <Navbar.Brand className="justify-content-end">{`My shopping cart: ${cart.length}`}</Navbar.Brand>
          </Container>
        </Navbar>
        {currentUser ? (
          <Home setCart={setCart} />
        ) : (
          <Login setCurrentUser={setCurrentUser}/>
        )}

      </CartContext.Provider>
    </div>
  );
}

export default App;
