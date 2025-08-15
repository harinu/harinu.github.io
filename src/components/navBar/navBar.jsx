import React from 'react'
import { Component } from 'react';
import './navBar.css';

class NavBar extends Component {
  state = {clicked: false};

  handleClick =() =>{
    this.setState({clicked: !this.state.clicked})
  }

  render(){
  return (
    <>
    <nav>
      <a className= "nav-name" href='#home1'>
        Hari Priya Kandasamy.
      </a>
      <div>
        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
        <li>
            <a href='#work'>Work</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          {/* <li>
            <a href='#publications'>Publications</a>
          </li> */}
          <li>
            <a href='#timeline'>Experience</a>
          </li>

          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>

      <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className= {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
        
      </div>
    </nav>
    </>
    );  
  }
}

export default NavBar