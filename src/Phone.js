import {motion} from "framer-motion";
import {useState} from 'react';
import './Phone.css';

import phone from "./img/phone-in-hand-COLORED.png";


export default function Phone(){
    const height = document.documentElement.clientHeight;
    const width = document.documentElement.clientWidth;

    const phoneState = [
        {y:0, x:0, rotateZ:[-30,-25,-24,-23,-22,-21,-20,-20,-20,-15,-10,-5,0]},
        {y:"110%", rotateZ: 0}
    ]

    const [stateIndex, setState] = useState(0);

    const animate = () => setState(stateIndex+1);

    //TODO: the phone looks good, but cropping the image to have no white space is needed, after that things should work more as intended
    //
    return(
        <motion.div
            className="pseudoBody"
            onTap={animate}
            initial={{x:-150, y:"110%", rotateZ:-90}}
            animate={phoneState[stateIndex]}
            transition={{ease: "easeIn", duration: .8}}
            style={{justifyContent: "center"}}
        >
            <motion.img id="phone" src={phone}/>
            <motion.div className="phone-margin">
                <motion.div >
                    <motion.h1 >WELCOME</motion.h1>
                    <br/>
                    <motion.p >
                        Hello!<br/><br/>My Name is Matthew Hamel, and thank you for taking the time to look over my protfolio.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}