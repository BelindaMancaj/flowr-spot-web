import React, { useEffect, useState } from "react";
import Flower from "./Flower";
import "./styles/Home.scss";

const Home = () => {
  const [flowers, setFlowers] = useState([]);

  const getFlowersData = async () => {
    try {
      let response = await fetch(
        "https://flowrspot-api.herokuapp.com/api/v1/flowers"
      );

      if (!response.ok) throw new Error(response.statusText);
      let data = await response.json();
      setFlowers(data.flowers);
    } catch (err) {
      console.log("There was an error: ", err);
    }
  };

  useEffect(() => {
    getFlowersData();
  }, []);

  return (
    <div className="container">
      {flowers.map((flower) => {
        return <Flower flower={flower} key={flower.id} />;
      })}
    </div>
  );
};

export default Home;
