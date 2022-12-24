import Services from "../components/Services";
import { Image } from "../components/Image";
import "../App.css";
import Map from "../components/Map";
export const Homepage = () => {
  return (
    <div>
      <div>
        <header className="showcase , grid">
          <div className="bg-image">
            <p> The MensRoom AMSTERDAM </p>
          </div>
        </header>
      </div>
      <div className="headerText">
        <div className="intro">
          <h2 style={{ fontSize: "xx-large" }}>
            FASHION FOCUSED, MALE GROOMING BRAND.
          </h2>
          <p style={{ fontSize: 20 }}>
            Are you looking for the best barbershop in Amsterdam?
            <br /> Then our barbershop , in the Utrechtstraat district is a
            perfect option for you.
            <br /> The MensRoom Amsterdam presents the revolutionary transition
            between precision
            <br /> barbering and contemporary hairdressing for the perfect men's
            haircut in Amsterdam.
          </p>
        </div>
      </div>
      <Services />
      <Image />
      <Map />
    </div>
  );
};
