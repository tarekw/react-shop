import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

export const Categories = ({
  categories,
  selectedIndex = 0,
  setSelectedIndex = (f) => f,
}) => (
  <ListGroup as="ul">
    {categories.map((item, index) => (
      <ListGroup.Item
        onClick={() => {
          setSelectedIndex(index);
        }}
        active={selectedIndex === index}
        key={index} // shouldn't use index as keys, but we don't intend to change the order of items here
        style={{cursor: "pointer"}}
      >
        {item}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default React.memo(Categories);
