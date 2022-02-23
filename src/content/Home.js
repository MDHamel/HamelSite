import React from 'react';

import '../styles/Home.css';
import '../styles/style.css';

import headImg from "../img/testHeadImg.jpg";
import profPic from "../img/testProfPic.jpg";

import Navbar from '../component/Navbar';
import Paragraph from '../component/Paragraph';

import { testContent, testTitle } from '../strings';


export default function Home(){

        return(
            <div>
                <img src={headImg} id="headImg" />
                <h1 id='headText'>Matthew Hamel</h1>

                <div style={{paddingBottom: "22%"}}/>
                <img src={profPic} className='profPic' />

                <Navbar />

                <div className="contentBack">
                        <Paragraph title="Test" content={testContent}/>
                        <Paragraph title="Test" content={testContent}/>
                        <Paragraph title="Test" content={testContent}/>
                        <Paragraph title="Test" content={testContent}/>
                        </div>
                    
            </div>

        )
}

