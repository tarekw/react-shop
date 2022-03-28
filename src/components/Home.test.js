/* eslint-disable  testing-library/no-wait-for-multiple-assertions */

import React from "react";
import axios from "axios";
// import renderer from "react-test-renderer";
import { shallow, mount, render } from "enzyme";
import { waitFor, act } from "@testing-library/react";

import Card from "react-bootstrap/Card";

import { BASE_URL } from "../constants";

import { Home } from "./Home";

jest.mock("axios");

describe("Home", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    axios.get.mockResolvedValueOnce({
      data: [],
    }).mockResolvedValueOnce({
      data: []
    });
    jest.spyOn(React, "useContext").mockReturnValue(() => {});
  });

  it("should fetch data correctly on mount", async () => {
    mount(<Home />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(2);
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products/categories`);
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products`);
    });
  });
});
