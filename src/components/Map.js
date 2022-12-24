import React from "react";
import "../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import { Icon } from "leaflet";

const barber = new Icon({
  iconUrl:
    "https://www.pngfind.com/pngs/m/383-3831254_map-icons-by-scott-de-jonge-barber-shop.png",
  iconSize: [45, 45],
});
function Map() {
  return (
    <div>
      <a href="https://maps.apple.com/?address=Helmholtzstraat%2055,%201098%20LE%20Amsterdam,%20Netherlands&auid=10203623610306194417&ll=52.350280,4.939050&lsp=9902&q=Men's%20Barbershop&_ext=CjIKBQgEELABCgQIBRADCgQIBhBnCgQIChAACgQIUhABCgQIVRAQCgQIWRADCgUIpAEQARImKfFNictCLEpAMaXxfrkOuhNAOW8jrydpLUpAQceG++sdyRNAUAQ%3D">
        <img
          alt={"location pic"}
          src={"https://freesvg.org/img/location_icon.png"}
          width="30"
        />
      </a>
      <a href="https://wa.me/0031639040699">
        {" "}
        <img
          alt={"whatsapp icon pic"}
          src={
            "https://www.aircobrabant.nl/wp-content/uploads/Whatsapp-icon.png"
          }
          width="30"
        />
      </a>
      <MapContainer center={[52.355767, 4.900297]} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[52.355767, 4.900297]} icon={barber}>
          <Popup>
            <img
              alt={"the mens room"}
              style={{ width: "150px", borderRadius: "0.5em" }}
              src={
                "https://www.barbershops.nl/sites/default/files/cutthroat_001.jpg"
              }
            />
            <p>THE MENSROOM barbershop</p>
            <p> ⭐⭐⭐⭐⭐ </p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
