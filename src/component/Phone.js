import React from "react";
import phone from "../img/phone-in-hand-COLORED.png";
import arrow from "../img/Arrow.png"
import { phoneText } from "../content.js";

//import './Phone.css';


export default function Phone(props){
    
    return(
        <div style={{ width:"40vw"}}>
            <img id="phone" src={phone}/>
            <div className="phone-margin">
                <div >
                    {phoneText}

                    <img
                    src={arrow}
                    className="arrow"
                    style={{position: "fixed", width: "12%", padding:"4%", left:"50%",top:"auto", bottom:"0"}}
                    id="down"
                    onClick={props.next}
                    />
                </div>
            </div>
        </div>
    );
}