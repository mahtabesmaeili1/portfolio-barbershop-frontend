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
        The men's room,best barbershop in Amsterdam.We are open everyday 10:00
        till 19:00
      </div>
    </div>
  );
}
