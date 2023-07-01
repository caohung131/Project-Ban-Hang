import React, { useEffect, useState, useContext } from "react";
// import Cardproduct from "../main/Cardproduct";
import "./phone.css";
import Brand from "./Brand";
import PriceRange from "./PriceRange";
import Product from "./Product";
import Emty from "./Emty";
import { Context } from "../../context/Context";

const Accessories = () => {
  const { product, sortProduct } = useContext(Context);

  const [page, setPage] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState([0, 50000000]);
  const [resultFound, setResultFound] = useState(true);
  const [list, setList] = useState(product);
  const [brand, setBrand] = useState([
    { id: 1, checked: false, label: "iPhone" },
    { id: 2, checked: false, label: "Samsung" },
    { id: 3, checked: false, label: "Xiaomi" },
    { id: 4, checked: false, label: "Realme" },
    { id: 5, checked: false, label: "Oppo" },
    { id: 6, checked: false, label: "Iphone" },
    { id: 7, checked: false, label: "Vivo" },
    { id: 8, checked: false, label: "Nokia" },
    { id: 9, checked: false, label: "ROG Phone" },
  ]);

  const handleSelectPage = (pg) => {
    setPage(pg);
  };

  const handleChangeChecked = (id) => {
    const brandStateList = brand;
    const changeCheckedBrand = brandStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setBrand(changeCheckedBrand);
  };

  const handleChangePrice = (event, value) => setSelectedPrice(value);

  const applyFilter = () => {
    let updatedList = product;

    //brand filter
    const brandChecked = brand
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (brandChecked.length) {
      updatedList = updatedList.filter((item) =>
        brandChecked.includes(item.brand.toLowerCase())
      );
    }
    // prices filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.cost >= minPrice && item.cost <= maxPrice
    );
    setList(updatedList);
  };

  useEffect(() => {
    applyFilter();
  }, [brand, selectedPrice, sortProduct]);

  return (
    <>
      <div style={{ width: "70%", margin: "auto" }}>
        <section class="section-pagetop bg">
          <div class="container">
            <h2 class="title-page">Phụ kiện</h2>
          </div>
        </section>

        <section class="section-content padding-y">
          <div class="container">
            <div class="row">
              <aside class="col-md-3">
                <div class="card">
                  <article class="filter-group">
                    <header class="card-header">
                      <h6 class="title">Price range </h6>
                    </header>
                    <div class="filter-content collapse show" id="collapse_3">
                      <div class="card-body">
                        <PriceRange
                          selectedPrice={selectedPrice}
                          changedPrice={handleChangePrice}
                        />
                      </div>
                    </div>
                  </article>
                  <article class="filter-group">
                    <header class="card-header">
                      <h6 class="title">Hãng</h6>
                    </header>
                    <div class="filter-content collapse show" id="collapse_1">
                      <div class="card-body">
                        <Brand
                          brand={brand}
                          changeChecked={handleChangeChecked}
                        />
                      </div>
                    </div>
                  </article>
                </div>
              </aside>
              <main class="col-md-9">
                <header class="border-bottom mb-4 pb-3">
                  <div class="form-inline">
                    <select
                      class="mr-2 form-control"
                      style={{ width: "20%" }}
                      onChange={(e) => sortProduct(e.target.value)}
                    >
                      {/* <option>Mới nhất</option>
                      <option>Cũ nhất</option> */}
                      <option value="asc">Giá tăng dần</option>
                      <option value="desc">Giá giảm dần</option>
                    </select>
                  </div>
                </header>

                {resultFound ? <Product list={list} /> : <Emty />}

                <nav
                  class="mt-4"
                  aria-label="Page navigation sample"
                  className="mt-4"
                  style={{ marginLeft: "40%" }}
                >
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link">Previous</a>
                    </li>
                    {[1, 2].map((pg) => (
                      <li
                        className={`page-item ${pg === page ? "active" : ""}`}
                        onClick={() => handleSelectPage(pg)}
                      >
                        <a className="page-link" href="#">
                          {pg}
                        </a>
                      </li>
                    ))}
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </main>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Accessories;
