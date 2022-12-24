import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllServices } from "../store/service/thunks";
import "./service.css";
import { selectServices } from "../store/service/selectors";
import { Link } from "react-router-dom";

export default function Services() {
  const dispatch = useDispatch();

  const service = useSelector(selectServices);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  return (
    <div className="wholeService" id="service">
      <h2 className="treatmentHeader"> TREATMENTS</h2>
      <p className="p">OUR SPECIALTY</p>
      <div className="teatmentBox">
        {!service
          ? "Loading... "
          : service.map((s) => {
              return (
                <div className="teatmentDetails" key={s.id}>
                  <div>
                    <h2>{s.name}</h2>
                    <p>{s.price}€ </p>
                    <div>
                      {s.duration} minutes
                      <div>
                        <div className="clock">
                          <div className="cup top">
                            <div className="sand"></div>
                          </div>
                          <div className="cup">
                            <div className="sand delayed"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="aa">
        <Link to={`/makeappointment`}>
          <p className="a">
            <span></span>
            <span></span>
            <span></span>
            <span></span>BOOK NOW
          </p>
        </Link>
      </div>
    </div>
  );
}
