import axios from "axios";

import { BASE_URL, ALL_PRODUCTS } from "../constants";

import { getAllProducts, getAllCategories, getInCategory } from "./catalog";

jest.mock("axios");

describe("catalog", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    axios.get.mockResolvedValue("data");
    axios.CancelToken = {
      source: () => ({
        token: "canceltoken",
        cancel: jest.fn(),
      }),
    };
  });

  it("should get all products", async () => {
    const ret = await getAllProducts();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products`, {
      cancelToken: "canceltoken",
    });
    expect(ret).toBe("data");
  });

  it("should get all categories", async () => {
    const ret = await getAllCategories();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products/categories`, {
      cancelToken: "canceltoken",
    });
    expect(ret).toBe("data");
  });

  it("should get all products in category", async () => {
    const ret = await getInCategory("clothing");

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/products/category/clothing`,
      { cancelToken: "canceltoken" }
    );
    expect(ret).toBe("data");
  });

  it("should get all products in ALL", async () => {
    const ret = await getInCategory(ALL_PRODUCTS);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/products`, {
      cancelToken: "canceltoken",
    });
    expect(ret).toBe("data");
  });
});
