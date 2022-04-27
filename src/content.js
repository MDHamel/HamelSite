
import React, { useEffect, useState } from "react";


const MultiText = (props) => {
    const [i, setIndex] = useState(0);
    const [anim, setAnim] = useState("startup");
    const words = props.children.split(", ");


    const animHandler = () =>{
        if(anim === "startup"){
            if(i+1 == words.length){
                setIndex(0);
            }
            else{
                setIndex(i+1);
            }
            setAnim("startdown");
        }
        else{
            setAnim("startup");
        }
        
    };
    
    return(
        <div style={{height:"8vh", overflow:"hidden"}}>
            <h2 id={anim} style={{fontSize:"5vh", margin:0}} onAnimationEnd={animHandler}>{words[i]}</h2>
        </div>
    )

    }


export const phoneText = <div className="text"> 
    <h3 style={{marginBottom:"8vh"}}>Hello!</h3>
    
    <h4>My name is</h4> <h2 style={{color:"var(--green)", marginTop: "-20px"}} >Matthew Hamel</h2>
    <h3 style={{color:"var(--diffgreen)", fontSize:"4vh", marginTop: "-10px", marginBottom:"4vh"}}>I’m a Developer who likes making</h3> <MultiText>Web Apps, Unity Games, Discord Bots, Android Apps, Python Scripts</MultiText>
    <div style={{marginBottom:"10vh"}}/>
    <p style={{color:"var(--yellow"}}>Press the arrows like the one below to transition through my protfolio.</p>
    
</div>;




