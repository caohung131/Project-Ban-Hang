import React from "react";
import "../../Assets/vid.css";

const Productvid = () => {
  return (
    <div className="vid-container">
      <div>
        <img
          src="https://cdn.mobilecity.vn/mobilecity-vn/images/2023/06/w800/banner-website-sua-chua-gia-goc.jpg.webp"
          alt=""
          style={{ width: "99%" }}
        />
      </div>
      <div style={{ width: "33%" }}>
        <iframe
          src="https://www.youtube.com/embed/aLfbDNr2OWM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="big-vid"
        ></iframe>
        <div>
          <div className="vidshow-container">
            <iframe
              src="https://www.youtube.com/embed/aLfbDNr2OWM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="three-vid"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/aLfbDNr2OWM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="three-vid"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/aLfbDNr2OWM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="three-vid"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productvid;
