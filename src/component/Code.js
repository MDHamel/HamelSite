import React from 'react';
import "./Code.css";


import angle from "../img/angle.png";

import content from "./CodeContent";

import {useState, useEffect} from "react"



export default function Code(props) {

    const [tab, selectTab] = useState(0);

    const [project, setProject] = useState("ReadMe");

    const changeProject = (projName) => {setProject(projName); selectTab(0); };

    const TabConstructor = () =>{
        return(content[project].map( (item , i) => <p onClick={()=>{selectTab(i)}} id={i===tab?"selected":""} className='tab'>{item.fileName}</p>));
    }

    const ProjectItem = (props) => {
        return (<div onClick={() => {changeProject(props.children.replace(' ', ''))}} style={{marginTop:"-25px", marginLeft:"15px", }}><img src={angle} style={{marginBottom:"4px"}}/><p style={{display:"inline-block", marginLeft:"5px", cursor:"pointer"}}>{props.children}</p></div>);
    };


    return (
        <div>
            <div >
                <div id='windowEdge' />
                <div style={{position:"fixed", top:"1.5vh", right: "1vw"}}>
                    <div className='circle' style={{backgroundColor: "#4ce663"}}/>
                    <div className='circle' style={{backgroundColor: "#e6d94c"}}/>
                    <div className='circle' style={{backgroundColor: "#e64c58", cursor:"pointer"}}  onClick={props.exit} />                        
                </div>
            </div>
            
            
            <div id="projectPannel">
                <div style={{marginLeft: "10%"}}>
                    <h1 className='projectHead'> Welcome</h1>
                        <div className='projectList'>
                            <h2 className='projectHead'>Start Here</h2>
                            <ProjectItem>Read Me</ProjectItem>
                        </div>

                    <h1 className='projectHead'>Projects</h1>

                    <div className='projectList'>
                        <h2 className='projectHead'>Python</h2>
                        <ProjectItem>Python Uno</ProjectItem>
                    </div>

                    <div className='projectList'>
                        <h2 className='projectHead'>Java</h2>
                        <ProjectItem>Blackjack</ProjectItem>
                    </div>
                </div>
                

            </div>

            <div id="tabArea" >
                <div id='tabContainer'>
                    <div>
                        
                    </div>
                        <TabConstructor />
                </div> 
            </div>

            <div id='document'>
                <div id='body'>
                    <p>{content[project][tab].content}</p>
                </div>
            </div>


            <div id="taskBar">

            </div>
        </div>
    )
}