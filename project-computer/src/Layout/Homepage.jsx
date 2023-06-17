import React from "react";
import Cardproduct from "./Cardproduct";
import Productcarousel from "../Layout/Productcarousel";
import Productvid from "../Layout/Productvid";

const Homepage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
          margin: "auto",
        }}
      >
        <Productcarousel />
        <Productvid />
      </div>

      <section className="py-5" style={{ marginRight: "8%" }}>
        <div className="container px-4 px-lg-5 mt-5">
          <div
            className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            style={{ width: "113%", margin: "auto" }}
          >
            <Cardproduct />
            <Cardproduct />
            <Cardproduct />
            <Cardproduct />
            <Cardproduct />
            <Cardproduct />
            <Cardproduct />
            <Cardproduct />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
