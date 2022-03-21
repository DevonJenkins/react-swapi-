import { useState, useEffect } from "react";
import { getStarshipDeets } from "../services/api-calls";
import { useLocation } from "react-router-dom";



const StarshipDetails = (props) => {
  const[shipDetails, setShipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {

    getStarshipDeets(location.state.starship.url)

    .then(shipDetails => setShipDetails(shipDetails))
  }, [] )

  return (  
    <>
      <div className="ship-details">
        <h1> Starship Details</h1>
        <h2> Name: {shipDetails.name}</h2>
        <h2> Model: {shipDetails.model}</h2>
      </div>
    </>
  );
}


export default StarshipDetails;