import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllServices } from "../store/service/thunks";

import { selectServices } from "../store/service/selectors";
import { Link } from "react-router-dom";

export default function Services() {
  const dispatch = useDispatch();

  const service = useSelector(selectServices);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  return (
    <div>
      {!service
        ? "Loading... "
        : service.map((s) => {
            return (
              <div key={s.id}>
                <h2>{s.name}</h2>
                <h2>{s.price}euro € </h2>
                <h2>{s.duration} minutes ⏳</h2>
              </div>
            );
          })}
      <Link to={`/makeappointment`}>
        <button>BOOK NOW</button>
      </Link>
    </div>
  );
}
