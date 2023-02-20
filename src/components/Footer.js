import React from "react";
import sample from "./video.mp4";
import "./Footer.css";
export function Footer() {
  return (
    <div className="footer">
      <video
        loop
        autoPlay
        muted
        className="video"
        src={sample}
        type="video/mp4"
      />
      <div className="text">
        <p>
          The men's room,best barbershop in the Amsterdam. We are open everyday
          from 10:00 until 19:00
        </p>
      </div>
    </div>
  );
}
