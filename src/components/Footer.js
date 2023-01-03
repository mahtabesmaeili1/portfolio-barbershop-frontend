import React from "react";
import sample from "./video.mp4";
import "./Footer.css";
export function Footer() {
  return (
    <div className="footer">
      {" "}
      <video loop autoPlay muted className="video">
        <source src={sample} type="video/mp4" />{" "}
      </video>
      <p
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          fontSize: "40px",
        }}
      >
        hello
      </p>
    </div>
  );
}
