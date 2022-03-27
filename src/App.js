import { useReducer } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ShopContext } from "./contexts/shop";
import { reducerTypes } from "./constants";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  cart: [],
  token: null,
};

function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case reducerTypes.ADD_TO_CART:
      newState.cart = [action.payload, ...state.cart];
      return newState;
    case reducerTypes.REMOVE_FROM_CART:
      const index = state.cart.indexOf(action.payload);
      const newCart = [...state.cart];
      if (index !== -1) {
        newCart.splice(index, 1);
        newState.cart = newCart;
      }
      return newState;
    case reducerTypes.SET_TOKEN:
      newState.token = action.payload;
      return newState;
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <ShopContext.Provider value={dispatch}>
        <Navbar bg="dark" variant="dark" style={{ marginBottom: "2rem" }}>
          <Container>
            <Navbar.Brand>My Shop</Navbar.Brand>
            {state.token && (
              <Navbar.Brand className="justify-content-end">{`My shopping cart: ${state.cart.length}`}</Navbar.Brand>
            )}
          </Container>
        </Navbar>
        {state.token ? <Home /> : <Login />}
      </ShopContext.Provider>
    </div>
  );
}

export default App;
