import React from "react";

const Productvid = () => {
  return (
    <div style={{ width: "29%" }}>
      <iframe
        src="https://www.youtube.com/embed/aLfbDNr2OWM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style={{ width: "100%", height: "60.5%" }}
      ></iframe>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/aLfbDNr2OWM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ width: "32%" }}
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/aLfbDNr2OWM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ width: "32%" }}
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/aLfbDNr2OWM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ width: "32%" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Productvid;
