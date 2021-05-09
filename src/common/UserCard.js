import React,{ useState} from "react";
import { Redirect, useHistory } from "react-router-dom";

const characters = [
  {
    id: 1,
    name: "Available Normal Beds",
    alterEgo: "7",
  },
  {
    id: 2,
    name: "Available ICU Beds",
    alterEgo: "4",
  },
  {
    id: 3,
    name: "Available Covid Beds",
    alterEgo: "4",
  },
  {
    id: 4,
    name: "Hospital is Covid or not",
    alterEgo: "yes",
  },
];
function UserCard(props) {
  let history = useHistory();
  const handleCard = () => {
    history.push("/tableData");
    
  };
 
  return (
    <div >
      <ul style={{ listStyleType: "none" , cursorStyle: "pointer", marginTop: "15px"}} >
        {characters.map((character,index) => {
          return (
            <div key={index} className="row">
            <div className="col-lg-7">
            <li>
              <div
              onClick={handleCard}
                className="card_container shadow-sm p-4"
                style={{
                  boxShadow: "rgb(225 225 225) 3px 5px 10px 4px",
                  margin: "10px auto",
                  borderRadius: "10px",
                  backgroundColor: "rgb(250 254 255);",
                }}
              >
                <p>
                  <strong>{character.name}</strong>
                </p>
                <p>{character.alterEgo}</p>
              </div>
            </li>
        </div>
        </div>
          );
        })}
      </ul>
    </div>
  );
}

export default UserCard;
