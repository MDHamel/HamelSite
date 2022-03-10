import React from 'react';

import '../styles/Home.css';
import '../styles/style.css';

import headImg from "../img/testHeadImg.jpg";
import profPic from "../img/testProfPic.jpg";

import Navbar from '../component/Navbar';
import Paragraph from '../component/Paragraph';

import { testContent, testTitle } from '../strings';

import content from "../strings.json"
import {motion} from "framer-motion"


export default function Home(){

        return(
            <div>
                <motion.div
                    style={{width:"100px", height:"100px", backgroundColor:"aliceblue"}}
                    initial={{x:0}}
                    animate={{x:"90vw"}}
                    transition={{duration: 2}}
                />
                <img src={headImg} id="headImg" />
                <h1 id='headText'>Matthew Hamel</h1>

                <div style={{paddingBottom: "22%"}}/>
                <img src={profPic} className='profPic' />

                <Navbar />

                <div className="contentBack">
                    <h1 id='welcome'>Hello and Welcome!</h1>
                    <h2 id='intro'>My name is Matthew Hamel. <br/> Thank you for taking the time to look over my personal site.</h2>
                    <Paragraph title={content.home.overview.title} content={content.home.overview.paragraph}/>
                    <Paragraph title={content.home.languages.title} content={content.home.languages.paragraph}/>
                </div>
                    
            </div>

        )
}

