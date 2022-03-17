import { useEffect, useState } from "react";
import { getAllStarships } from "../services/api-calls";
import { Link } from "react-router-dom";




const ShipList = (props) => {
  const [shipList, setShipList] = useState ([])

  useEffect(() => {
    getAllStarships()
    .then(shipData => setShipList(shipData.results))
  }, []) 

  return (
    <>
      <h1>Ship List</h1>
      {shipList.length ? 
      <>
        {shipList.map((starship) => (
            <div key={starship.name}>
              <Link 
              to="/starship"
              state={{ starship }}>

              {starship.name}
              </Link> 
              <br />
            </div>
          ))
        }

      </>
        : 
      <>
        <h2>Loading ship list...</h2>
      </> 
      }
  </>
  );
}

export default ShipList;