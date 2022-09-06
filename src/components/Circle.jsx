import React from "react";
import pic from "../star.png";

function Circle(props){

    var customStyle = {
        backgroundColor: ""

    }
    
  if (props.clicked) {
    console.log("hufsjhsdvj")
  }

    function handleClick(event){
      // props.setRating(props.num);
        if(props.num!==0){
        props.submit(props.num)
        } else{
            alert("Don't be naughty lmao.")
        }
    }
    console.log(props.currentRating);

    
    return <div style={{background: props.currentRating == props.num ? "hsl(25, 97%, 53%)" : "hsla(217, 12%, 63%, 0.091)"}} onClick={handleClick} className= "circle" id= {props.num}>
    {props.img && <img src={pic} alt= "star"></img>}
    {props.num !==0 &&<p className="number">{props.num}</p>}

    
    
    </div>
}

export default Circle;

// style={isClicked ? {color: "white"} : {color: "grey"}}


// onMouseOver={handleMouseOver} onClick={handleClick} style={isClicked ? customPStyle : {backgroundColor: " hsla(217, 12%, 63%, 0.091)"}} 

// const [isHovered , setIsHovered] = useState(false);

//     function handleMouseOver(){
//     setIsHovered(!isHovered);
// }

//     const customPStyle = {
//         backgroundColor: "hsl(25, 97%, 53%)"
//     }
//     const [isClicked, setIsClicked] = useState(false);

//     function handleClick(){
//         setIsClicked(!isClicked);
//         console.log("circle is clicked");
//     }

// function handleMouseOver(){
//     setIsHovered(!isHovered);
// }
// const customPStyle = {
//     backgroundColor: "black"
// }
// const [isHovered , setIsHovered] = useState(false);
// function handleMouseOver(){
//     setIsHovered(!isHovered);
// }
// onMouseOver={handleMouseOver} onMouseOut={handleMouseOver} style={isHovered ? {backgroundColor: "hsl(217, 12%, 63%)", color: "white"}  : {customPStyle} }
