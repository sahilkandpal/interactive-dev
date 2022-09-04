import React, { useState } from "react";
import Button from "./Button";
import Circle from "./Circle";
import Final from "./Final";


function App(){

  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  const [currentRating, setCurrentRating] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitRating(number){
    setCurrentRating(number);
    setButtonIsClicked(true)
  }

  function submitted(num){
    console.log("Submitted this rating",num);
    setIsSubmitted(!isSubmitted);
    
  }


    return (
   
  <div><div className="container">
    
    <div className="card">
    { isSubmitted 
    ?  
    <Final  rate = {currentRating}/>
    :
      <div className="heading">
      <Circle img = {true} num = {0}/>

       <div className="heading-text"> How did we do?</div>
        <p className="paragraph">  Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!</p>

        <div className="numbers">
          <Circle clicked= {buttonIsClicked}  submit={submitRating} num = {"1"} />
          <Circle clicked= {buttonIsClicked}  submit={submitRating} num = {"2"} />
          <Circle clicked= {buttonIsClicked}  submit={submitRating} num = {"3"} />
          <Circle clicked= {buttonIsClicked}  submit={submitRating} num = {"4"} />
          <Circle clicked= {buttonIsClicked}  submit={submitRating} num = {"5"} />
        </div>
        <Button num = {currentRating} sub= {submitted}/>
      </div>
 }
      
    </div>

    </div>
    </div>
    )
}

export default App;