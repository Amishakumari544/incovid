import React,{ useState} from "react";
import { Redirect } from "react-router-dom";
import EditModal from "./EditModal";
import edit_img from "./../assets/edit_img.png"
 
const characters = [
  {
    id: 1,
    name: "Available Normal Beds",
    alterEgo: "Diana Prince",
  },
  {
    id: 2,
    name: "Available ICU Beds",
    alterEgo: "Pamela Lillian Isley",
  },
  {
    id: 3,
    name: "Available Covid Beds",
    alterEgo: "Dinah Drake",
  },
  {
    id: 4,
    name: "Hospital is Covid or not",
    alterEgo: "Selina Kyle",
  },
];
function CardComponent() {
  const handleCard = () => {
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
      <ul style={{ listStyleType: "none" }} onClick={handleCard}>
        {characters.map((character,index) => {
          return (
            
            <li>
              <div key={index}
                className="card_container shadow-sm p-4"
                style={{
                  boxShadow: "rgb(225 225 225) 3px 5px 10px 4px",
                  margin: "10px auto",
                  borderRadius: "10px",
                  backgroundColor: "rgb(250 254 255)",
                }}
              >
                <p>
                  <strong>{character.name}</strong>
                </p>
                <p>{character.alterEgo}</p>
              <EditModal/>
              </div>
             
            </li>
          );
        })}
      </ul>
      </div>
    </div>
    </div>
  );
}
export default CardComponent;