import './App.css';
import './Phone.css';
import {motion} from "framer-motion";
import {useState} from 'react';

import mirror from "./img/about-me-right.png"
import aboutLeft from "./img/about-me-left.png"
import expRight from "./img/exp-right.png"
import expLeft from "./img/exp-left.png"
import phone from "./img/phone-in-hand-COLORED.png";
import arrow from "./img/Arrow.png"

function App() {

  const startState = {x:"-100%"}
  const startStateBelow = {y:"-100vh"}
  const viewState = {x:0, y:0}
  const endState = {x:"100%", y:0}

  const [aniIndex, setAniIndex] = useState(0)
  
  const next = ()=> {
    setAniIndex(aniIndex+1);
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

  const arrowState=[
    {visibility:"hidden", opacity: 0},
    {visibility:"visible", opacity: 1}
  ]

  const phoneState = [
    {y:0, x:0, rotateZ:[-30,-25,-24,-23,-22,-21,-20,-20,-20,-15,-10,-5,0]},
    {y:"200vh", rotateZ: 0},
    {opacity:0},
    {opacity:0}
  ]

  
  return (
    <div>
      <motion.div
            className="pseudoBody"
            initial={{x:"-20vw", y:"100vh", rotateZ:-120}}
            animate={phoneState[aniIndex]}
            transition={{ease: "easeIn", duration: aniIndex===0?.8:.5}}
            style={{justifyContent: "center"}}
        >
            <motion.img id="phone" src={phone}/>
            <motion.div className="phone-margin">
                <motion.div >
                    <motion.h1 >WELCOME</motion.h1>
                    <br/>
                    <motion.p >
                        Hello!<br/><br/>My Name is Matthew Hamel, and thank you for taking the time to look over my protfolio.<br/><br/><br/> Press the arrows like the one bellow to transition to the next page.
                    </motion.p>

                    <motion.img
                    src={arrow}
                    className="arrow"
                    style={{position: "relative", width: "12%", padding:"4%"}}
                    id="down"
                    onTap={next}
                    />
                </motion.div>
            </motion.div>
        </motion.div>


      <motion.div
        initial={startStateBelow}
        animate={aboutMeAni[aniIndex]}
        transition={{duration:.5, ease:"easeInOut"}} 
      >
        <motion.img className='image' id='right' src={mirror}/>
        <motion.img className='image' id='left' src={aboutLeft}/>

        <motion.div id='bodyText'>
          <motion.p>TESTING TEXT!</motion.p>
        </motion.div>

      </motion.div>

      <motion.div
        initial={startState}

        animate={expAni[aniIndex]}
        transition={{duration:.5, ease:"easeInOut"}}
      >
        <motion.img className='image' id="right" src={expRight}/>
        <motion.img className='image' id="left" src={expLeft}/>

        <motion.div id='bodyText'>
          <motion.p>TESTING TEXT!</motion.p>
        </motion.div>

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

      



    </div>
    
    
  );
}

export default App;
