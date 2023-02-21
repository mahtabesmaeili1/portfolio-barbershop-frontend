import React from "react";
import "../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <div className="mapSection">
      <h2
        id="contact"
        style={{ textAlign: "center", paddingTop: "30px", fontSize: "30px" }}
      >
        WHERE YOU CAN FIND US
      </h2>
      <div className="flexBox">
        <div className="flex1">
          <p style={{ fontSize: "27px" }}>
            We are located inside the <br />
            "Gallery Salon Studios"
            <br />
            Roetersstraat 41
            <br />
            1028 WK
            <br />
            Amsterdam, Netherland
          </p>
        </div>
        <div className="flex2">
          <a
            style={{ color: "white" }}
            href="mailto:mahtabesmaeilii13@gmail.com"
          >
            mahtabesmaeilii13@gmail.com
          </a>{" "}
          <br />
          <a style={{ color: "white" }} href="tel:+31648391204">
            +31648391204
          </a>
          <a href="https://api.whatsapp.com/send?phone=31648391204">
            <img
              style={{
                width: "25px",
                display: "block",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
              alt={"whatsapp icon pic"}
              src={
                "https://www.aircobrabant.nl/wp-content/uploads/Whatsapp-icon.png"
              }
            />
          </a>
        </div>
      </div>
      <div>
        <MapContainer
          style={{
            borderRadius: "10px",
            height: "30vw",
            width: "90%",
            margin: "auto",
            backgroundColor: "black",
          }}
          center={[52.355767, 4.900297]}
          zoom={13}
        >
          <TileLayer
            style={{ color: "white" }}
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[52.355767, 4.900297]}>
            <Popup>
              <h3>
                THE MENSROOM
                <br />
                barbershop
              </h3>
              <a
                href="https://www.google.com/maps/dir/52.3998817,4.9263348/The+men%E2%80%99s+Room,+Utrechtsestraat,+Amsterdam/@52.3799452,4.8731692,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47c609241acb6ad5:0xc94b4d46d6214419!2m2!1d4.8986634!2d52.3628352"
                style={{ fontSize: "20px" }}
              >
                Direction
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="last">
        <div>
          © 2022 Mensroom Amsterdam. All Rights Reserved. Built by Mahtab.
        </div>
      </div>
    </div>
  );
}

export default Map;
