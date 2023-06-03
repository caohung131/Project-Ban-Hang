import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../Assets/style.css";

export default function App() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted"
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        color: "white",
      }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="/#" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h3 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="location-dot" className="me-3" />
                Hệ thống cửa hàng
              </h3>
              <div>
                <h4 style={{ fontWeight: "bold" }}>Hà Nội</h4>
                <li className="li">120 Thái Hà, Q. Đống Đa</li>
                <li className="li">398 Cầu Giấy, Q. Cầu Giấy</li>
                <li className="li">42 Phố Vọng, Hai Bà Trưng</li>
              </div>
              <div>
                <h4 style={{ fontWeight: "bold" }}>Hồ Chí Minh</h4>
                <li className="li">123 Trần Quang Khải, Q.1</li>
                <li className="li">602 Lê Hồng Phong, P.10, Q.10</li>
              </div>
              <div>
                <h4 style={{ fontWeight: "bold" }}>Đà Nẵng</h4>
                <li className="li">97 Hàm Nghi, Q.Thanh Khê</li>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h3 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="circle-question" className="me-3" />
                quy định - chính sách
              </h3>
              <ul style={{ listStyleType: "circle" }}>
                <li className="li">Chính sách bảo hành</li>
                <li className="li">Chính sách vận chuyển</li>
                <li className="li">Chính sách đổi trả hàng</li>
                <li className="li">Chính sách bảo mật thông tin</li>
                <li className="li">Hướng dẫn thanh toán</li>
                <li className="li">Hướng dẫn mua hàng Online</li>
                <li className="li">Dịch vụ Ship COD Toàn quốc</li>
              </ul>
            </MDBCol>

            {/* <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h3 className="text-uppercase fw-bold mb-4">Tổng đài hỗ trợ</h3>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 0969.120.120
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 037.437.9999
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
