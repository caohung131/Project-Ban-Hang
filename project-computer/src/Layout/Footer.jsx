import { React } from "react";
import "../Assets/footer.css";

const Footer = () => {
  return (
    <footer
      class="text-center text-lg-start bg-light text-muted"
      className="footer"
    >
      <div style={{ width: "70%", margin: "auto" }}>
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/#" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/#" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/#" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="/#" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="/#" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="/#" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>
                  Hệ thống cửa hàng
                </h6>
                <p>
                  <h8>Hà Nội</h8>
                  <div>120 Thái Hà, Q. Đống Đa</div>
                  <div>398 Cầu Giấy, Q. Cầu Giấy</div>
                  <div>42 Phố Vọng, Hai Bà Trưng</div>
                  <h8>TP.Hồ Chí Minh</h8>
                  <div>123 Trần Quang Khải, Q.1</div>
                  <div>602 Lê Hồng Phong, P.10, Q.10</div>
                  <h8>Đà Nẵng</h8>
                  <div>97 Hàm Nghi, Q.Thanh Khê</div>
                </p>
              </div>

              <div
                class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
                style={{ width: "30%", paddingLeft: "4%" }}
              >
                <h6 class="text-uppercase fw-bold mb-4">
                  quy định - chính sách
                </h6>
                <p>
                  <ul>
                    <li>Chính sách bảo hành</li>
                    <li>Chính sách vận chuyển</li>
                    <li>Chính sách đổi trả hàng</li>
                    <li>Chính sách bảo mật thông tin</li>
                    <li>Hướng dẫn thanh toán</li>
                    <li>Hướng dẫn mua hàng Online</li>
                    <li>Dịch vụ Ship COD Toàn quốc</li>
                    <li>Chính sách đại lý linh, phụ kiện</li>
                  </ul>
                </p>
              </div>

              <div
                class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"
                style={{ width: "20%" }}
              >
                <h6 class="text-uppercase fw-bold mb-4">
                  Dịch vụ và thông tin khác
                </h6>
                <p>
                  <ul>
                    <li>Khách hàng doanh nghiệp (B2B)</li>
                    <li>Quy chế hoạt động</li>
                    <li>Liên hệ hợp tác kinh doanh</li>
                    <li>Tuyển dụng</li>
                  </ul>
                </p>
              </div>

              <div
                class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
                style={{ width: "25%", paddingLeft: "10%" }}
              >
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
