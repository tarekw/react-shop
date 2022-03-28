import axios from "axios";

import { BASE_URL } from "../constants";

import { authenticate } from "./login";

jest.mock("axios");

describe("login", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    axios.post.mockResolvedValue("token");
  });

  it("should get all products", async () => {
    const ret = await authenticate("username", "pwd");

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/auth/login`, {
      password: "pwd",
      username: "username",
    });
    expect(ret).toBe("token");
  });
});
