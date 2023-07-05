import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faFacebook, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent =() =>
{
    
    return(
      <>
        <div className="title">
        <div>
          <FontAwesomeIcon icon={faCoffee} size="3x" className= "Coffee"></FontAwesomeIcon>
    
        </div>
        <div>
          <input type="text" className="search"></input>
        </div>
        <FontAwesomeIcon icon={faUser} size = "4x" className= "Icon" />
        </div>
     
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);