import React from "react";
import "./styles/Flower.scss";
import { StarFilled } from "@ant-design/icons";

const Flower = ({ flower }) => {
  return (
    <div
      className="flower-box"
      style={{ backgroundImage: `url('${flower.profile_picture}')` }}
    >
      <div
        className={`${
          flower.favourite ? "star-favourite" : "star-not-favourite"
        }`}
      >
        <StarFilled />
      </div>
      <p className="flower-name">{flower.name}</p>
      <p className="flower-latin-name">{flower.latin_name}</p>
      <p className="flower-sightings">{`${flower.sightings} sightings`}</p>
    </div>
  );
};

export default Flower;
