import React, { useState } from "react";
import "./Skills.css";

import HTMLpng from "./html.png";
import CSSpng from "./css.png";
import JSpng from "./js.png";
import Reactpng from "./react.png";
import NODEpng from "./node.png";
import MONGODBpng from "./mongodb.png";

const Skills = () => {
  const [skillsAnimation , setSkillsAnimation] = useState(false)
  const showitems = ()=> {
    if(window.scrollY >= 750 ){
      setSkillsAnimation(true)
    }else{
      setSkillsAnimation(false)
    }
}
  window.addEventListener('scroll',showitems)
  return (
    <>
    <div id='Skills--id'></div>
      { skillsAnimation ?<div className="Skills-Container">
        <div className="Skills-Card1">
          <div className="Card-image">
            <img src={HTMLpng} />
          </div>
          <div className="Card-p">
            HyperText Markup Language, commonly abbreviated HTML or in its
            latest version , HTML5 is the markup language designed to represent
            web pages.
          </div>
        </div>
        <div className="Skills-Card2">
          <div className="Card-image">
            <img src={CSSpng} />
          </div>
          <div className="Card-p">
            Cascading Style Sheets, form a computer language that describes the
            presentation of HTML and XML documents. The standards defining CSS
            are published by the World Wide Web Consortium.
          </div>
        </div>
        <div className="Skills-Card3">
          <div className="Card-image">
            <img src={JSpng} />
          </div>
          <div className="Card-p">
            JavaScript is a scripting programming language primarily used in
            interactive web pages and as such is an essential part of web
            applications.
          </div>
        </div>
        <div className="Skills-Card4">
          <div className="Card-image">
            <img src={Reactpng} />
          </div>
          <div className="Card-p">
            React is an open-source, front end, JavaScript library for building
            user interfaces or UI components. It is maintained byFacebook and a
            community of individual developers and companies.
          </div>
        </div>
        <div className="Skills-Card5">
          <div className="Card-image">
            <img src={NODEpng} />
          </div>
          <div className="Card-p">
            Node.js is a free software platform in JavaScript, geared towards
            highly competitive event network applications that must be able to
            scale.
          </div>
        </div>
        <div className="Skills-Card6">
          <div className="Card-image">
            <img src={MONGODBpng} />
          </div>
          <div className="Card-p">
            MongoDB is a source-available cross-platform
            document-orienteddatabase program. Classified as a NoSQL database
            program, MongoDB uses JSON-like documents with optional schemas.
          </div>
        </div>
      </div> : <div className="Skills-Container"></div>}
      
    </>
  );
};

export default Skills;
