import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Card from "react-bootstrap/Card";

import { Items } from "./Items";

describe("Items", () => {
  let category;
  let selectItem;

  beforeEach(() => {
    category = [
      {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description: "description",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: {
          rate: 3.3,
          count: 203,
        },
      },
      {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description: "description",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: {
          rate: 2.9,
          count: 470,
        },
      },
    ];
    selectItem = jest.fn();
  });

  it("should match snapshot", () => {
    const tree = renderer
      .create(<Items category={category} selectItem={selectItem} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should handle item selection", () => {
    const wrapper = shallow(<Items category={category} selectItem={selectItem} />);
    wrapper.find(Card).last().simulate("click")
    expect(selectItem).toHaveBeenCalledTimes(1);
    expect(selectItem).toHaveBeenCalledWith(1);
  });
});
