import React from "react";
import pic from "../illustration-thank-you.svg"

function Final(props){
    return <div>
    <img className="thank-img" src={pic} alt="thanks"></img>
        <div className="rated-info">
        <p className="rate-information">You selected {props.rate} out of 5</p>
        </div>
        <div className="other-info">
        <h1 className="thank">Thank you!</h1>
        </div>
        <div className="other-para">
        
We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!
</div>
    </div>
}


export default Final;