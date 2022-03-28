import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import ListGroup from "react-bootstrap/ListGroup";

import { Categories } from "./Categories";

describe("Categories", () => {
  let categories;
  let setSelectedIndex;

  beforeEach(() => {
    categories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];
    setSelectedIndex = jest.fn();
  });

  it("should render properly", () => {
    const tree = renderer
      .create(
        <Categories
          categories={categories}
          setSelectedIndex={setSelectedIndex}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle item selection", () => {
    const wrapper = shallow(
      <Categories categories={categories} setSelectedIndex={setSelectedIndex} />
    );
    wrapper.find(ListGroup.Item).last().simulate("click");
    expect(setSelectedIndex).toHaveBeenCalledTimes(1);
    expect(setSelectedIndex).toHaveBeenCalledWith(3);
  });
});
