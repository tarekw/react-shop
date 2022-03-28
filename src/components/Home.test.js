import React from "react";
import axios from "axios";
import { mount } from "enzyme";
import { waitFor } from "@testing-library/react";

import { BASE_URL } from "../constants";

import { Home } from "./Home";

jest.mock("axios");

describe("Home", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    axios.get
      .mockResolvedValueOnce({
        data: [],
      })
      .mockResolvedValueOnce({
        data: [],
      });
    axios.CancelToken = {
      source: () => ({
        token: "canceltoken",
        cancel: jest.fn(),
      }),
    };
    jest.spyOn(React, "useContext").mockReturnValue(() => {});
  });

  it("should fetch data correctly on mount", async () => {
    mount(<Home />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(2);
      expect(axios.get.mock.calls[0][0]).toBe(`${BASE_URL}/products/categories`);
      expect(axios.get.mock.calls[1][0]).toBe(`${BASE_URL}/products`);
    });
  });
});
