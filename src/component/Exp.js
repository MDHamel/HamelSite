import React, {useState} from "react";

import '../App.css';

import expRight from "../img/exp-right.png"
import expLeft from "../img/exp-left.png"

import {exp} from "../content.js"


const TabbedContent = (props) => {
    const [currentTab, setCurrentTab] = useState(0);

    const tabs = props.children.map((val, i) => {return val.props.name});

    return(

        <div>
            <div>
                {tabs.map((val, i)=>{return <h4 className={i===currentTab?"tab2 selectedTab":"tab2"}   onClick={()=>{setCurrentTab(i)}}>{val}</h4>})}
            </div>
            <div style={{width:"99%", height:"5px", backgroundColor:"white", margin:"-40px 0 0 10px"}}/>
            <div style={{width:"100%", height:"100%"}}>
                {props.children[currentTab]}
            </div>
            
        </div>
        );

};

const Tab = (props) =>{
    return(
        <div className="text">
            {props.children}
        </div>
    )
}


export default function Exp(props){
    return(
        <div>
            <img className='image' id="right" src={expRight}/>
            <img className='image' id="left" src={expLeft}/>

            <div id='bodyText' style={{width: "50vw", height:"78vh", top:"50vh", left: "46vw", transform:"translate(-50%, -50%)"}}>
                <div className="text">
                    <h2 style={{margin:"0 0px 30px 30px"}}>Experience</h2>
                </div>
                
                <div style={{width:"100%", height:"90%", overflowY:"scroll"}}>
                    <div style={{width:"95%", height:"95%"}}>
                        <TabbedContent>
                            <Tab name="Education">
                                <h3>Las Positas</h3>
                                <ul>
                                    <li>
                                        Intro to Comp Sci through Data Structures - Used C++
                                    </li>
                                    <li>
                                        Assembly Language - Reviewed NASM and MASM
                                    </li>
                                    <li>
                                        Intro to Linux
                                    </li>
                                    <li>
                                        Calculus I, II, and III
                                    </li>
                                    <li>Linear Algebra</li>
                                </ul>
                                <h3>East Bay</h3>
                                <ul>
                                    <li>
                                        Software Engineering - Used Java. Went over software life cycle and unit testing. We were placed into groups at the beginning of the semester and worked on a project together throughout.
                                    </li>
                                    <li>
                                        Mobile Development - Used Java and Android Studio
                                    </li>
                                    <li>
                                        Web Development - Reviewed HTML/CSS/JavaScript and learned about Python Django
                                    </li>
                                    <li>
                                        Networking - Reviewed different internet protocols, the OSI model, I.O.T, and used python to make basic networking applications. 
                                    </li>
                                    <li>
                                        Database Architecture - Learned SQL and went over the basics of creating a database.
                                    </li>
                                    <li>
                                        Analysis of Algorithms
                                    </li>
                                    <li>
                                        Computer Graphics - We used OpenGL and Qt to make basic UIs. We later learned how to render 3D models via OpenGL in Qt.
                                    </li>
                                </ul>

                            </Tab>
                            <Tab name="theCoderSchool">
                                <p>theCoderSchool</p>
                            </Tab>
                        </TabbedContent>
                    </div>
                </div>
            </div>
        </div>
    )
}


