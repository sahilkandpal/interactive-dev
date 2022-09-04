import React from "react";
function Button(props){


    function finalClick(event){
        if(event.target.value !== ""){
        props.sub(event.target.value);
        event.preventDefault();
        }
        else{
            alert("Select a rating first bro.")
    }
      }
  return  <div>
  <button onClick={finalClick} type="submit" value={props.num}>SUBMIT</button>

  </div>
}


export default Button;
