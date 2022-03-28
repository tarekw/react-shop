import React from "react";
import renderer from "react-test-renderer";

import { reducerTypes } from "./constants";
import App, { reducer } from "./App";

describe("App", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("reducer", () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        cart: [],
        token: null,
      };
    });

    it("should add to cart properly", () => {
      let ret = reducer(initialState, {
        type: reducerTypes.ADD_TO_CART,
        payload: 1,
      });

      expect(ret).toEqual({ cart: [1], token: null });
    });

    it("should remove from cart properly", () => {
      initialState.cart = [2];
      let ret = reducer(initialState, {
        type: reducerTypes.REMOVE_FROM_CART,
        payload: 2,
      });

      expect(ret).toEqual({ cart: [], token: null });
    });

    it("should set token", () => {
      let ret = reducer(initialState, {
        type: reducerTypes.SET_TOKEN,
        payload: 1234,
      });

      expect(ret).toEqual({ cart: [], token: 1234 });
    });
  });
});
