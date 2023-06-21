import React, { useState } from 'react'

import Infor from './Infor.jsx'

import { UncontrolledCarousel } from 'reactstrap';  

const images = [
  {
    src: 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697712034572_iPhone%2014%20Promax%20(1).jpg',
    altText: '',
    caption: '',
    header: ''
  },
  {
      src: 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697714065864_iPhone%2014%20Promax%20(4).jpg',
      altText: '',
      caption: '',
      header: ' '
    },
    {
      src: 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697716104054_iPhone%2014%20Promax%20(3).jpg',
      altText: '',
      caption: '',
      header: ''
    }
  ];
  // const Images = () => <UncontrolledCarousel items={items} />;
const CardProduct = () => {

  const [show,setShow] = useState('false')
  
  const handleShow = () => { 
    setShow(true)
    if (show) {
      setShow(false)
    }
  }
 
  return (
  <div>
  <div className="detail-container">
    <div className="detail-content-top">
      <h1>Iphone 14 Pro Max 128GB </h1> 
      <a href><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />314 đánh giá | 21 Hỏi &amp; đáp <i className="fa-solid fa-circle-plus" /> So sánh</a>
    </div>
    <div className="detail-content">
      {/* nav left */}
      <div className="detail-content-left" style={{marginRight:'50px'}}>
        {/* <Images/> */}
        <UncontrolledCarousel items={images} />
          <div className="moree">
            <div className="moree-item">
              <a href=''><i className="fa-regular fa-image" /> <br /> Xem thêm 17 ảnh </a>
            </div>
            <div className="moree-item">
              <a href=''><i className="fa-brands fa-youtube" /><br />Video trên tay </a>
            </div>
            <div className="moree-item">
              <a href=''><i className="fa-solid fa-gift" /><br />Trong hộp có gì</a> 
            </div>
         
        </div>
        <div className="specifications">
          <p style={{padding:'5px'}}><i className="fa-solid fa-mobile-screen-button" /> 6.7 inch, Super Retina XDR, 2796 x 1290 Pixels</p>
          <p style={{padding:'5px'}}><i className="fa-solid fa-record-vinyl" /> 48.0 MP + 12.0 MP + 12.0 MP</p>
          <p style={{padding:'5px'}}><i className="fa-solid fa-camera-rotate" /> 12.0 MP</p>
          <p style={{padding:'5px'}}><i className="fa-solid fa-note-sticky" /> Apple A16 Bionic</p>
          <p style={{padding:'5px'}}><i className="fa-solid fa-microchip" />128 GB</p>
          
            <Infor/>
        </div>
        <p><i className="fa-regular fa-handshake" /> Hàng chính hãng - Bảo hành 12 tháng <i className="fa-solid fa-truck-fast" /> Giao hàng toàn quốc</p>
      </div>
      {/* nav right */}
      <div className="detail-right">
        <div className="detail-right-top">
          <h1 style={{color: '#cb1c22'}} className="cost">26.580.000đ <span style={{textDecoration: 'line-through', color: 'gray', fontSize: '20px'}} className="cost-fake">29.990.000đ</span></h1>
          <p>Trả góp chỉ từ <br /> 1.934.500đ/tháng</p>
        </div>
        <div className="choose-phone">
          <div className="choose-cost">
            <div className="choose-cost-item">
              <input name="gender" type="radio" />128 GB <br />26.580.000đ
            </div> 
            <div className="choose-cost-item">
              <input name="gender" type="radio" />256 GB <br />29.690.000đ
            </div>
            <div className="choose-cost-item">
              <input name="gender" type="radio" />512 GB <br />35.990.000đ
            </div>
            <div className="choose-cost-item">
              <input name="gender" type="radio" />1TB GB<br />41.990.000đ
            </div>
          </div> 
          <div className="choose-color">
            <div className="choose-color-item">
              <img style={{maxWidth: '70px'}} src="https://i.pinimg.com/236x/52/e0/5f/52e05feaee70b1d139e98bf373230569.jpg" alt="" />
              <p>Đen</p>
            </div>
            <div className="choose-color-item">
              <img style={{maxWidth: '70px'}} src="https://i.pinimg.com/236x/d8/58/ff/d858ff509c4650e1a5291ed71ffddc74.jpg" alt="" />
              <p>Tím</p>
            </div>
            <div className="choose-color-item">
              <img style={{maxWidth: '70px'}} src="https://i.pinimg.com/236x/3e/a4/15/3ea415e268f94aaa4f5f31f1e6fb8aab.jpg" alt="" />
              <p>Vàng</p>
            </div>
            <div className="choose-color-item">
              <img style={{maxWidth: '70px'}} src="https://i.pinimg.com/236x/16/1b/25/161b25f04077d0d035e0dc28ec3d88d5.jpg" alt="" />
              <p>Bạc</p>
            </div>
          </div>
        </div>
        <div className="promo">
          <p>Chọn 1 trong 2 khuyến mãi sau</p>
          <input name="gender" type="radio" style={{marginTop: '10px'}} /> Giảm ngay 2.900 áp dụng khi mua màu Tím áp dụng đến 05/06<br />
          <input name="gender" type="radio" style={{marginTop: '10px'}} /> Giảm ngay 400 áp dụng đến 05/06 + Trả góp 0%
        </div>
        <div className="buyy">
          <div className="buyy-item1"><a href="" >Mua ngay</a></div>  
          <div className="buyy-item2"><a href="" >Trả góp 0%</a> </div>
          <div className="buyy-item2"><a href="" >Trả góp qua thẻ</a></div>  
          <p>Gọi<a href="" >1800-6601</a> để được tư vấn mua hàng (Miễn phí)</p>
        </div>
        {/* tiếp tục */}
        <div className="suggest">
          <h4>Gợi ý sản phẩm mua kèm</h4>
          <div className="suggest-content-1">
            <img className= "imagee-content" src="https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/20/637387863045167961_pk-apple-00720432-dd.png" alt="Củ sạc Apple Power Adapter 20W Type-C" title="Củ sạc Apple Power Adapter 20W Type-C" width={68} height={68} />
            <div className="center">
              <div className="suggest-content-item">
                <p>Củ sạc Apple Power Adapter 20W Type-C</p>
                <span>520.000₫</span>
                <span> <button className="btn-addtocard">Thêm vào giỏ hàng</button></span>
              </div>
            </div>
          </div>
          <div className="suggest-content-1">
            <img className= "imagee-content" src="https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/13/638065491421965102_op-lung-iphone-14-pro-max-silicone-case-with-magsafe-dd.jpg" alt="Ốp lưng iPhone 14 Pro Max Silicone Case with MagSafe" title="Ốp lưng iPhone 14 Pro Max Silicone Case with MagSafe" width={68} height={68} />
            <div className="suggest-content-item">
              <p>Ốp lưng iPhone 14 Pro Max Silicone Case with MagSafe</p>
              <span>1.340.000₫</span>
              <span> <button className="btn-addtocard">Thêm vào giỏ hàng</button></span>
            </div>
          </div>
          <div className="suggest-content-1">
            <img className= "imagee-content" src="https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/8/637982433040096193_tai-nghe-airpods-pro-2022-dd.jpg" alt="Tai nghe AirPods Pro 2022" title="Tai nghe AirPods Pro 2022" width={68} height={68} />
            <div className="suggest-content-item">
              <p>Tai nghe AirPods Pro 2022</p>
              <span>5.990.000₫</span>
              <span> <button className="btn-addtocard">Thêm vào giỏ hàng</button></span>
            </div>
          </div>
          <div className="suggest-content-1">
            <img className= "imagee-content" src="https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/21/637756950346589456_day-sac-magsafe-charger-to-usb-c-cable-1-m-trang-dd.jpg" alt="Dây sạc Apple Magsafe Charger to USB-C Cable 1m" title="Dây sạc Apple Magsafe Charger to USB-C Cable 1m" width={68} height={68} />
            <div className="suggest-content-item">
              <p>Dây sạc Apple Magsafe Charger to USB-C Cable 1m</p>
              <span>990.000₫</span>
              <span> <button className="btn-addtocard">Thêm vào giỏ hàng</button></span>
            </div>
          </div>
        </div>
        <div className="suggest">
          <h4>Mua theo Combo</h4>
          <div className="suggest-content-1">
            <img className= "imagee-content" src="https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/1/14/637146112860441272_Trip20000_NAVYBlue.jpg" alt="Giảm đến 60% Sạc dự phòng/Tai Nghe khi mua kèm ĐTDĐ. MTB. iPhone" title="Giảm đến 60% Sạc dự phòng/Tai Nghe khi mua kèm ĐTDĐ. MTB. iPhone" width={68} height={68} />
            <div className="center">
              <div className="suggest-content-item">
                <p>Pin sạc dự phòng UmeTravel 20000mAh TRIP20000 Quick Charge</p>
                <span>599.400₫</span>
                <span> <button className="btn-addtocard">Thêm vào giỏ hàng</button></span>
              </div>
            </div>
          </div>
          <div className="suggest-content-1">
            <img className= "imagee-content" src="https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/27/637394178178169663_adapter-sac-nhanh-20w-anker-1.png" alt="Giảm ngay 10% Cáp/Sạc khi mua kèm ĐTDĐ. iPhone" title="Giảm ngay 10% Cáp/Sạc khi mua kèm ĐTDĐ. iPhone" width={68} height={68} />
            <div className="suggest-content-item">
              <p>Củ sạc nhanh Anker 20W Powerport III A2633</p>
              <span>360.000₫
              </span>
              <span> <button className="btn-addtocard">Thêm vào giỏ hàng</button></span>
            </div>
          </div>
          <div className="suggest-content-1">
            <img className= "imagee-content" src="https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/3/638003910524841586_HASP-OP-LUNG-SOC-XANH-IPHONE-14-PROMAX-AVT.jpg" alt="Giảm thêm 10% Ốp lưng khi mua kèm ĐTDĐ. iPhone" title="Giảm thêm 10% Ốp lưng khi mua kèm ĐTDĐ. iPhone" width={68} height={68} />
            <div className="suggest-content-item">
              <p>Ốp lưng chống sốc iPhone 14 Pro Max YVS</p>
              <span>359.100₫</span>
              <span> <button className="btn-addtocard">Thêm vào giỏ hàng</button></span>
            </div>
          </div>
          <form className="choose-item-loc">
            <button className="choose-btn"><i className="fa-solid fa-magnifying-glass" /></button>
            <input className="choose-search-text" type="text" placeholder="Chọn sản phẩm khác" />
          </form>
        </div>
        <button className='add-them' >Mua thêm 2 sản phẩm</button>
      </div>
    </div>
  </div>
  {/* Câu hỏi */}
  <div className="question">
    <h2>Câu hỏi thường gặp</h2>
   
    <div className="question-bo">
    <div className="question-item" onClick={handleShow}>
      <h2> <i className="fa-regular fa-circle-question" /> Chip xử lý của iPhone 14 Pro Max có gì đặc biệt? </h2> 
        <i className="fa-solid fa-circle-plus" />
    </div>
    <div >
      {show === true ? ( <h2>trả lơpfi</h2>) :( <h2> </h2>)}
     
    </div>
    </div>
    <div className="question-item">
      <h2> <i className="fa-regular fa-circle-question" /> iPhone 14 Pro Max có tính năng Always On không? </h2> 
        <i  className="fa-solid fa-circle-plus" />
    </div>
    <div className="question-item">
      <h2> <i className="fa-regular fa-circle-question" /> Màn hình viên thuốc của iPhone 14 Pro Max có gì đặc biệt? </h2> 
        <i  className="fa-solid fa-circle-plus" />
    </div>
    <div className="question-item">
      <h2> <i className="fa-regular fa-circle-question" /> iPhone 14 Pro Max có màu gì mới đáng mua?</h2> 
        <i className="fa-solid fa-circle-plus" />
    </div>
  </div>
  {/* commemnt */}
  <div className="comment">
    <h2>Đánh giá sản phẩm</h2>
    <div className="comment-item">
      <div className="comment-item-1">
        <p>Đánh giá trung bình</p> 
        <p style={{fontSize: '50px', color: '#cb1c22', fontWeight: 'bolder'}}>5/5</p>
        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
        <p style={{opacity: '0.6'}}>448 đánh giá</p>
      </div>
      <div className="comment-item-1">
        <div className="process">
          <span className="procces-text">5<i className="fa-solid fa-star" /></span>
          <div className="process-line">
            <div style={{width: '86%'}} className="process-line-bar">
            </div>
          </div>
          <span className="procces-text">384</span>
        </div>
        <div className="process">
          <span className="procces-text">4<i className="fa-solid fa-star" /> </span>
          <div className="process-line">
            <div className="process-line-bar" style={{width: '13%'}} />
          </div>
          <span className="procces-text">84</span>
        </div>
        <div className="process">
          <span className="procces-text">3<i className="fa-solid fa-star" /></span>
          <div className="process-line">
            <div className="process-line-bar" style={{width: '40%'}}>
            </div>
          </div>
          <span className="procces-text">44</span>
        </div>
        <div className="process">
          <span className="procces-text">2<i className="fa-solid fa-star" /></span>
          <div className="process-line">
            <div className="process-line-bar" style={{backgroundColor: '#edeeef'}}>
            </div>
          </div>
          <span className="procces-text">0</span>
        </div>
        <div className="process">
          <span className="procces-text">1<i className="fa-solid fa-star" /></span>
          <div className="process-line">
            <div className="process-line-bar" style={{backgroundColor: '#edeeef'}}>
            </div>
          </div>
          <span className="procces-text">0</span>
        </div>
      </div>
      <div>
        <p>Bạn đã dùng sản phẩm này?</p>
        <button style={{background: '#cb1c22', borderRadius: '5px', color: '#edeeef', marginLeft: '45px', fontSize: 'large',height: '40px'}}>Gửi đánh giá</button>
      </div>
    </div>
  </div>
  <div className="ask-anser">
    <div className="ask-anser-item">
      <h2>Hỏi và đáp</h2>
      <form className="choose-item-loc">
        <button className="choose-btn"><i className="fa-solid fa-magnifying-glass" /></button>
        <input className="choose-search-text" type="text" placeholder="Chọn sản phẩm khác" />
      </form>
    </div>
    
    
    <div className="logo-name">NH 
    
    
    </div>
    
    
    <div className="comm">
      <div className="comm-item" style={{display:'flex'}}>
        <input className="comm-ip" type="text" placeholder="Nhập nội dung bình luận (tiếng Việt có dấu)..." />
        <button style={{background: '#cb1c22', borderRadius: '5px', color: '#edeeef', marginLeft: '45px', fontSize: 'large',height: '40px'}}>Gửi bình luận</button>
      </div>
    </div> 
  </div>
</div>

  )
}
export default CardProduct
