import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { ShopContext } from "../contexts/shop";
import { ALL_PRODUCTS, reducerTypes } from "../constants"
import { getAllCategories, getInCategory } from "../services/catalog";

import "./home.css";

export const Home = () => {
  const dispatch = React.useContext(ShopContext);

  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCategories();
      setCategories([ALL_PRODUCTS, ...result.data]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getInCategory(categories[selected]);
      setCategory(result.data);
    };

    if (categories.length) {
      fetchData();
    }
  }, [selected, categories]);

  const selectItem = (index) => {
    setSelectedItem(index);
    setShow(true);
  };

  return (
    <div className="d-flex flex-row justify-content-center">
      <ListGroup as="ul">
        {categories.map((item, index) => (
          <ListGroup.Item
            onClick={() => {
              setSelected(index);
            }}
            active={selected === index}
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Container fluid="sm" style={{ margin: 0 }}>
        <Row>
          {category.map((item, index) => (
            <Card
              style={{ width: "10rem" }}
              className="cardItem"
              onClick={() => selectItem(index)}
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Text>{item.title}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {`${category[selectedItem]?.title} (£${category[selectedItem]?.price}) `}
            <Button
              variant="outline-success"
              onClick={() =>
                dispatch({
                  type: reducerTypes.ADD_TO_CART,
                  payload: category[selectedItem]?.id,
                })
              }
            >
              Add to cart
            </Button>
            &nbsp;
            <Button
              variant="outline-danger"
              onClick={() =>
                dispatch({
                  type: reducerTypes.REMOVE_FROM_CART,
                  payload: category[selectedItem]?.id,
                })
              }
            >
              Remove cart
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={category[selectedItem]?.image} thumbnail />
          <p>{`Rating: ${category[selectedItem]?.rating?.rate} / Total: ${category[selectedItem]?.rating?.count}`}</p>
          <h4>{category[selectedItem]?.description}</h4>
        </Modal.Body>
      </Modal>
    </div>
  );
};
