import React , {useState} from "react";
import "./About.css";
import profil from "./Profil.png";
import iconreact from "./react.png";
import TextTransition, { presets } from "react-text-transition";
import { Link } from "react-router-dom";


const TEXTS = [
  "developper",
  "blogger",
  "freelancer",
  "youtuber"
];

const About = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const [cvbtn, setCvbtn] = useState(false)
  
  const CvBTN = () => {
    setCvbtn(true)
  }
  const CvBTNout = () => {
    setCvbtn(false)
  }
const [aboutanimation , setAboutanimation] = useState(false)
  const showitems = ()=> {
    if(window.scrollY >= 450 ){
      setAboutanimation(true)
    }else{
      setAboutanimation(false)
    }
}
  window.addEventListener('scroll',showitems)

  return (
    <>
    <div id='about--id'>
      {aboutanimation ? <div className="About-Container" >
        <div onMouseOut={CvBTNout} onMouseOver={CvBTN} className="About-Image">
          <img  src={profil} />
          <div className="IconReact">
            <img src={iconreact} />
          </div>
          <div  className={cvbtn ? 'DownloadCvBtn2' : 'DownloadCvBtn'}> 
              <span>DOWNLOAD CV</span>
          </div>
        </div>
        <div className="About-Name">
          <h2>HELLO MY NAME IS</h2>
          <h1>ABDOU</h1>
          <h3>
            AND I'M A{" "}
            <TextTransition
              className='text-loop'
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
            />
          </h3>
        </div>
      </div> : <div className="About-Container"></div>}
      </div>
    </>
  );
};

export default About;
