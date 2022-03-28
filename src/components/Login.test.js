/* eslint-disable  testing-library/no-wait-for-multiple-assertions */

import React from "react";
import axios from "axios";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { waitFor } from "@testing-library/react";

import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

import { BASE_URL } from "../constants";

import { Login } from "./Login";

jest.mock("axios");

describe("Login", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    axios.post.mockResolvedValue({
      data: {
        token: "1234",
      },
    });
    jest.spyOn(React, "useContext").mockReturnValue(() => {});
  });

  it("should match snapshot", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle login", async () => {
    const wrapper = mount(<Login />);

    wrapper.find(Form.Control).at(0).getDOMNode().value = "username";
    wrapper.find(Form.Control).at(1).getDOMNode().value = "password";
    wrapper.find(Form).at(0).simulate("submit");

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/auth/login`, {
        username: "username",
        password: "password",
      });
    });
  });
});
