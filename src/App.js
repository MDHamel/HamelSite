import './App.css';
import {motion} from "framer-motion";
import {useState} from 'react';


import deskimg from "./img/desk.png"

import arrow from "./img/Arrow.png"

import Phone from './component/Phone';
import Code from './component/Code';
import Exp from './component/Exp';
import AboutMe from './component/about';


function App() {

  const startState = {x:"-120%"}
  const startStateBelow = {y:"-200vh"}
  const viewState = {x:0, y:0}
  const endState = {x:"120%", y:0}

  const [aniIndex, setAniIndex] = useState(0)
  
  const next = ()=> {
    setAniIndex(aniIndex===3? 0 : aniIndex+1);
  }

  const prev = ()=> {
    setAniIndex(aniIndex===0 ? 0 : aniIndex-1);
  }

  const aboutMeAni = [
    startStateBelow,
    viewState,
    endState,
    endState
  ];

  const expAni = [
    startState,
    startState,
    viewState,
    endState
  ];


  //for some reason, the text class increasing margins by 30px causes this to move
  const codeRoomAni = [
    startState,
    startState,
    startState,
    viewState
  ]

  const codeSmol = {scaleX:0.25, scaleY:0.305, bottom:"-31vh"};
  const codeBig = {scaleX:1, scaleY:1, bottom:"auto", top:0, margin:0};

  const codeAni = [
    codeSmol,
    codeSmol,
    codeSmol,
    codeBig,
  ]

  const arrowState=[
    {visibility:"hidden", opacity: 0},
    {visibility:"visible", opacity: 1},
    {visibility:"visible", opacity: 1},
    {opacity: 0},
  ]

  const phoneState = [
    {y:0, x:0, rotateZ:[-30,-25,-24,-23,-22,-21,-20,-20,-20,-15,-10,-5,0], position:"fixed"},
    {opacity:0, y:"200vh", rotateZ: 0},
    {opacity:0, y:"200vh"},
    {opacity:0, y:"200vh"}
  ]

  
  return (
    <div>
      <motion.div
            className="pseudoBody"
            initial={{x:"-20vw", y:"150vh", rotateZ:-120}}
            animate={phoneState[aniIndex]}
            transition={{delay: aniIndex===0?.5:0, ease: "easeIn", duration:.8}}
            style={{justifyContent: "center"}}
        >
            <Phone next={next}/>
        </motion.div>


      <motion.div
        initial={startStateBelow}
        animate={aboutMeAni[aniIndex]}
        transition={{duration:.5, ease:"easeInOut"}} 
      >
        {<AboutMe />}
      </motion.div>


      <motion.div
        initial={startState}

        animate={expAni[aniIndex]}
        transition={{duration:.5, ease:"easeInOut"}}
      >
        {<Exp />}
      </motion.div>

      

      <motion.img
      src={arrow}
      className="arrow"
      id="prev"
      onTap={prev}
      animate={arrowState[aniIndex]}
      transition={{duration: .8}}
      />

      <motion.img
      src={arrow}
      className="arrow"
      id="next"
      onTap={next}
      animate={arrowState[aniIndex]}
      transition={{duration: .8}}
      />

      <motion.div
        initial={codeRoomAni[0]}
        animate={codeRoomAni[aniIndex]}
        transition={{ease: "easeIn", duration:.5}}
      >
        <motion.div
            style={{position:"fixed", zIndex:1000}}
            initial={codeAni[0]}
            animate={codeAni[aniIndex]}
            transition={{delay:aniIndex===3?1.2:0, duration:aniIndex===3?.5:.25}}
        >
            <Code exit={prev}/> 
        </motion.div>

        <motion.img src={deskimg} style={{position:"fixed", bottom:"-100vh", width:"100vw", height:"75vh"}}/>
      </motion.div>

    </div>);
}

export default App;
