import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

export default function QuantityEdit() {
  const { onAdd, onRemove, cartItems } = useContext(Context);
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemPrice;

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Giỏ hàng
                        </MDBTypography>
                      </div>
                      <hr className="my-4" />
                      {cartItems.length === 0 && <div>Chưa có sản phẩm</div>}
                      {cartItems.map((item) => (
                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            {/* <MDBCardImage src={item.avatar} /> */}
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-muted">
                              {item.category}
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-black mb-0">
                              {item.name}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol
                            md="3"
                            lg="3"
                            xl="3"
                            className="d-flex align-items-center"
                          >
                            <MDBBtn
                              color="link"
                              className="px-2"
                              onClick={() => onRemove(item)}
                            >
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>

                            <div> {item.qty}</div>

                            <MDBBtn
                              color="link"
                              className="px-2"
                              onClick={() => onAdd(item)}
                            >
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              {item.price + "₫"}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-muted">
                              <MDBIcon fas icon="times" />
                            </a>
                          </MDBCol>
                        </MDBRow>
                      ))}
                      <hr className="my-4" />
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <Link to="/">
                            <MDBCardText
                              tag="a"
                              href="#!"
                              className="text-body"
                            >
                              <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                              Trở lại trang chủ
                            </MDBCardText>
                          </Link>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Sản phẩm:
                        </MDBTypography>
                        <MDBTypography tag="h5">{itemPrice} ₫</MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Mã giảm giá
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Tổng giá tiền
                        </MDBTypography>
                        <MDBTypography tag="h5">{totalPrice} ₫</MDBTypography>
                      </div>

                      <MDBBtn color="dark" block size="lg">
                        Thanh toán
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
