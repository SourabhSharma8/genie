import React from "react";
import UserImg from "../../Assests/g.png";
import IndivualProductCard from "./IndivualProductCard";

const IndivualCarosoual = ({ title }) => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: "$19.99",
      image: UserImg,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: "$29.99",
      image: UserImg,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: "$39.99",
      image: UserImg,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of Product 4",
      price: "$49.99",
      image: UserImg,
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of Product 5",
      price: "$59.99",
      image: UserImg,
    },
  ];

  return (
    <div className="container">
       <div className="heading-link mt-4 ">
       <h3 className=" ps-5 ">{title}</h3>
       <a className="ml-auto pe-5">See more</a>
        </div>
      <div id="productCarousel" className="carousel slide mt-4 text-center">
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon rounded-circle me-5"
            style={{ backgroundColor: "lightblue", color: "darkblue" }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              {products?.map((item, id) => {
                return <IndivualProductCard key={id} product={item} />;
              })}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon rounded-circle ms-5"
            style={{ backgroundColor: "lightblue", color: "darkblue" }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default IndivualCarosoual;
