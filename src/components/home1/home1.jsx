import React from 'react'
import './home1.css'
import Socials1 from './socials1';
import ScrollDown1 from './scrolldown1';


const Home1 = () => {
  return (
    <section  id="home1">
    <div className="home-container">  
    <div className="i-intro" >
        <div className="i-left">
            {/*<div className="i-name">*/}
            {/*    Hello World!*/}
            {/*</div>*/}
            <div className="i-subtitle">
                An ML Engineer with a passion for turning data into decisions and building intelligent systems. Whether it’s wrangling Snowflake metadata, decoding patterns with LLMs, or building search systems that actually surface what users need — I’m all in!

                
            </div>
            <div className="i-sub-sub">
              You can view my work here.  <strong>
              <a href="https://github.com/harinu" target="_blank" rel="noopener noreferrer" style={{marginLeft: '0.5rem'}}>
                <i className="fa-brands fa-github"></i>
              </a></strong>
            </div>
            <div className="buttonCenter">
            <a href="#contact" className="btn">Let's connect</a></div>
        </div>
        <div className="i-right">
            
        </div>
    </div>
    {/* <ScrollDown1 /> */}
    </div>
    </section>
  )
}

export default Home1