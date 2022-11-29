import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import CardInformation from "../component/CardInformation";

const createCard = (data) => {
  return (
    <CardInformation
      key={data.id}
      img={data.imgURL}
      name={data.name}
      price={data.price}
      premium_price={data.premium_price}
    />
  );
};
const Home = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#"><u>Category </u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Brand </u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Gender </u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Goal </u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Best sellers</u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Details</u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Gift Card</u></Navbar.Brand>
          <Navbar.Brand href="#"><u>Blog,Videos& More</u></Navbar.Brand>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img6.hkrtcdn.com/14609/bnr_1460845_o.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img7.hkrtcdn.com/21460/bnr_2145916_o.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img5.hkrtcdn.com/21102/bnr_2110134_o.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <CardInformation />
     
    </div>
  );
};

export default Home;

