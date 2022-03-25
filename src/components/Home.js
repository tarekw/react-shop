import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Image from 'react-bootstrap/Image'

import "./home.css";

import { getAllCategories, getInCategory } from "../services/catalog";

const ALL_PRODUCTS = "All";

export const Home = () => {
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
      console.log("cat data >>>> ", result);
      setCategory(result.data);
    };

    if (categories.length) {
      fetchData();
    }
  }, [selected, categories]);

  const selectItem = (index) => {
    setSelectedItem(index);
    console.log("item detail >>>>---- ", selectedItem);
    setShow(true);
  };

  return (
    <div className="d-flex flex-row">
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
      <Container>
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
            {category[selectedItem]?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={category[selectedItem]?.image} thumbnail />
          <p>{category[selectedItem]?.description}</p>
        </Modal.Body>
      </Modal>{" "}
    </div>
  );
};
