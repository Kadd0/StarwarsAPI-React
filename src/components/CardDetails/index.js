import React from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

function CardDetails() {
  const navigate = useNavigate();     
  const location = useLocation(); 
  const data = location.state;  

  return (
    <div>
      <div className="icon"> 
        <IconContext.Provider value={{ size: "40px", color: "white" }}>
          <IoIosArrowBack onClick={() => navigate(-1)} />
        </IconContext.Provider>
      </div>
      <div className="card card-details">
        <h2 className="card-title">{data.name}</h2>
        <img className="card-image" src="../spaceship.png " alt="spaceship" />
        <div className="card-body">
          <p className="card-description">Model: {data.model}</p>
          <p className="card-description">
            Hyperdrive Rating: {data.hyperdrive_rating}
          </p>
          <p className="card-description">Passengers: {data.passengers}</p>
          <p className="card-description">
            Max Atmosphering Speed: {data.max_atmosphering_speed}
          </p>
          <p className="card-description">Manufacturer: {data.manufacturer}</p>
          <p className="card-description">Crew: {data.crew}</p>
          <p className="card-description">
            Cargo Capacity: {data.cargo_capacity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
