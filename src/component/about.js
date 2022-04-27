import React, {useState} from "react"

import mirror from "../img/about-me-right.png"
import aboutLeft from "../img/about-me-left.png"

import '../App.css';




const Content = () =>{
    return(
        <div>
            <p>
            My name is Matthew and I enjoy developing applications for computers and phones. I’ve always gravitated towards computers, so naturally, I spent a lot of time on them. In 2011, I learned about computer programming in my high school engineering class. After that, I decided to follow that passion into college and make my major Computer Science. 
            </p>
            <p>
                After a couple of years of working towards my degree, I got the privilege of working at theCoderSchool. While employed here, I constantly challenged myself to find new projects and learn new languages. After a couple of years, I was able to become one of the top code coaches (tutors) who would help fellow coaches, lead summer camp programs, and train newly hired coaches. 
            </p>
            <p>
                Now being a recent graduate, I am ready to expand my horizon and start working as a professional Software Engineer in the industry. Even after graduating, I am still not satisfied with the amount of knowledge I have acquired, so I continue working on new technologies and projects to help further my understanding. I have recently been developing web apps using React, like this website, as well as learning more JavaScript and CSS.
            </p>
        </div> 
    );
}

export default function AboutMe(props){

    return(
        <div>
            <img className='image' id='right' src={mirror}/>
            <img className='image' id='left' src={aboutLeft}/>
            
            
            <div className="text" id='bodyText' style={{width:"52vw", left: "49vw", top:"32vh", transform:"translate(-50%, -32%)"}}>
                <h2 style={{marginLeft:"2vw"}}>About Me</h2>
                <div style={{width: "100%", height:"4px", backgroundColor: "white", margin: "20px 0px 40px 0px", borderRadius:"10px"}} />
                <div style={{hegiht:"200vh", overflowY:"auto"}}>
                    <p>
                        {<Content />}
                    </p>
                </div>
            </div>
        </div>
    )
}

