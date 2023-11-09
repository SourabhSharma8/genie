import React, { useEffect, useState } from "react";
import IndivualCarosoual from "./IndiviualCarosul";
import { useSelector } from "react-redux";
import Loader from "../../Assests/loading.gif";

const ProductListing = () => {
  // Redux store values displayed here
  const dataValues = useSelector((state) => state.Data.data);
  console.log(dataValues, " Store values");

  // Show loader for 1 minute
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <img src={Loader} />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-10 m-auto">
            <h4 className="">Genie : AI Gift Ideas</h4>
            <p className="border border-1 pt-3 pb-3 ps-3 mt-3 para-text">
              Recommed birthday gift ideas for my 55 year old mother. She likes
              pickleball, g..
            </p>
          </div>
        </div>
        <IndivualCarosoual title={"1.Beauty gift basket"} />
        <IndivualCarosoual title={"2.title here"} />
        <IndivualCarosoual title={"3.title here"} />
      </div>
    </>
  );
};

export default ProductListing;
