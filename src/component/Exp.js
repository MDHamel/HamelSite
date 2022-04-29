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
                {tabs.map((val, i)=>{return <h4 className={i===currentTab?"tab2 selectedTab":"tab2"}   onClick={()=>{document.getElementById("scroll").scrollTo(0,0);setCurrentTab(i);}}>{val}</h4>})}
            </div>
            <div style={{width:"99%", height:"4px", backgroundColor:"white", margin:"-40px 0 0 10px"}}/>
            <br />
            <div style={{width:"100%", height:"100%", overflowY:"scroll"}} id="scroll">
                <div style={{width:"90%", height:"60vh"}}>
                    {props.children[currentTab]}
                </div>
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

            <div id='bodyText' style={{width: "50vw", height:"80vh", top:"52vh", left: "46vw", transform:"translate(-50%, -50%)"}}>
                <div className="text">
                    <h2 style={{margin:"0 0px 30px 30px"}}>Experience</h2>
                </div>
                
                
                    <div>
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
                                <br/>
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
                                <p>
                                    My job title at theCoderSchool was a Code Coach, a tutor. My responsibilities were to tutor children aged eight to eighteen in one-on-one or two-on-one sessions lasting one to two hours. I would be responsible for teaching them through a project-based curriculum, which I would design based on the student(s) interests and needs. I would help the student through multiple projects, introducing new concepts to help build on their knowledge. After the student(s) got acquainted with programming, we would start to go over more advanced concepts, where I would help them become more independent with their coding.
                                </p>
                                <br />
                                <p>
                                    Later on, I would receive more responsibilities, such as teaching and coordinating summer camps, helping fellow coaches with project issues, and training new coaches. Summer camps would have up to 30 students enrolled and lasted four to eight hours for five days. Occasionally, my fellow code coach would need help with a student's work; in that situation, I would offer my assistance to help them overcome their problem. After three years of working at theCoderSchool, I was requested to mentor new coaches and help them get started with their new students.
                                </p>
                                <br/>
                                <p>
                                    Projects varied from student to student but could fit into the following categories:
                                </p>
                                <ul>
                                    <li>
                                    Python projects would start with basic syntax and concepts. After that, I would introduce them to new modules such as Beautiful Soup, Django, Tkinter, and more.
                                    </li>
                                    <li>
                                    Unity projects, which used C# and the Unity Game Engine, would go over the intro of game development and help the student become more acquainted with Unity's interface.
                                    </li>
                                    <li>
                                    Java projects were more standard. Students usually wanted a traditional approach to tutoring and requested help with homework from class. Otherwise, projects would start with the basics and go into more advanced concepts like classes and object orientation. Some students chose to go into Android App Development from here.
                                    </li>
                                    <li>
                                    Web development projects would go over HTML, CSS, and the basics to creating an appealing layout. Later on, we would go over JavaScript to make the website dynamic and responsive.
                                    </li>
                                    <li>
                                    Some students would choose other projects, like a C++ project or using a specific technology, but these were less common.
                                    </li>
                                </ul>
                            </Tab>
                        </TabbedContent>
                </div>
            </div>
        </div>
    )
}


