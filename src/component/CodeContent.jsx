import React from 'react';
import {useState} from 'react';

import { CopyBlock, androidstudio } from 'react-code-blocks';


import uno from "../code/Uno.py";
import unocards from "../code/UnoCards.py";

import blackjack from "../code/BlackJack.java";
import bjcards from "../code/PlayingCards.java";




export default {
    ReadMe: 
        [{
            fileName: "ReadMe.md",
            content : 
            <div style={{margin:"2%"}}>
                <h1>Welcome!</h1>
                <p>Use the side bar on the left to navigate between projects. Simply click on the project you would like to view, and then the project will load in this window.</p>
                <p>Tabs are provided right above the document so that you can look at multiple files. Simply click on the tab and the document will switch accordingly.</p>
                <h2>If you wish to leave and return to the rest of the website, <span style={{color:"#e64c58"}}>press the red circle in the top right!</span></h2>
            </div>
        },
        {
            fileName:"ClickMe.md",
            content:
            <div style={{margin:"2%"}}>
                <h1>You switched tabs!</h1>
                <p>You have successfully switched tabs, you can click on the other tab to return to the prior text if desired.</p>
                <p>Now use the Project Bar to switch to a new project!</p>
                
            </div>
        }],

    PythonUno:[
        {
            fileName: "ReadMe.md",
            content: 
            <div style={{margin:"2%"}}>
                <h1>Python Uno</h1>
                <p>This was a common project I used at theCoderSchool. This project would help transition students towards object-oriented programming by showing them simple objects.</p>
                <p>Object orientation is hard enough for college students, explaining how they work and why we use it is the hard part. Thankfully, playing cards are a good way to introduce the topic.</p>
                <p>I would usually start with a playing card (or for this project an Uno card) and ask about the qualities we care about from the card and how the game works.</p>
                <p>What do we get from the card? What values are important? What happens when specific cards are played? What are the general rules for playing a card?</p>
                <p>After the student is done thinking about the questions, we would move on to making the Card class in UnoCards.py. 
                    Using the answers they came up with, we would initialize the card with the specified values. After the cards were made we would move on to making the Deck class, which is just a simple collection of cards with some added features</p>
                <p>After that, it was as simple as setting up the players and game rules, Uno.py, and then just playing the game.</p>
                
            </div>
        },
        {
            fileName: "Uno.py",
            content: <MyCode src={uno} lang="python"/>
        },
        {
            fileName: "UnoCards.py",
            content: <MyCode src={unocards} lang="python"/>
        },
    ],
    Blackjack:[
        {
            fileName: "ReadMe.md",
            content:
            <div style={{margin:"2%"}}>
                    <h1>Java Blackjack</h1>
                    <p>Similar to the Python Uno project, this project involved exposing children and teens to the concept of Object-Orientation.</p>
                </div>
        },
        {
            fileName: "PlayingCards.java",
            content: <MyCode src={bjcards} lang="java" />
        },
        {
            fileName: "BlackJack.java",
            content: <MyCode src={blackjack} lang="java" />
        }
    ]
}

function MyCode(props){

    const [code, setState] = useState("Nothing");

    const t = fetch(props.src).then(r => r.text()).then(text => {setState(text)});


    return(
        <div style={{overflowY:"scroll", height:"84vh"}}>
            <CopyBlock
                text={code}
                language={props.lang}
                theme={props.theme? props.theme:androidstudio}
                showLineNumbers={true}
                startingLineNumber={1}
            />
        </div>
        
    )    
}
