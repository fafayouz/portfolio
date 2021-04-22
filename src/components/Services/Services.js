import React, { useState } from "react";
import "./Services.css";
import devweb from "./devweb.jpg";
import responsive from "./responsive.jpg";
import UX from './UX.jpg'
const Services = () => {
  const [ServicesAnimation , setServicesAnimation] = useState(false)
  const showitems = ()=> {
    if(window.scrollY >= 1400 ){
      setServicesAnimation(true)
    }else{
      setServicesAnimation(false)
    }
}
  window.addEventListener('scroll',showitems)
  return (
    <>
    <div id='Services--id'></div>
     { ServicesAnimation ? <div className="Services-Container">
        <div className="Services-Card-Container1">
          <div className="Services-Card-Image">
            <img src={devweb} />
          </div>
          <div className="Services-Card-Paragraphe">
            <span>
              Our team understands your business objectives and creates
              top-notch solutions that meet your needs leveraging the best
              front-end development technologies and practices. Our main goal is
              to engage your customers and deliver robust user experience. We
              build sophisticated web applications, single page applications,
              and cross-browser and cross-platform websites.
            </span>
          </div>
        </div>
        <div className="Services-Card-Container2">
          <div className="Services-Card-Paragraphe">
            <span>
              You have a site that is not suitable for all devices? We can help
              you with this problem, by making your site neat and responsive to
              all devices , We use the best technology with all the requirements
              you want.
            </span>
          </div>
          <div className="Services-Card-Image-">
            <img src={responsive} />
          </div>
        </div>
        <div className="Services-Card-Container3">
          <div className="Services-Card-Image">
            <img src={UX} />
          </div>
          <div className="Services-Card-Paragraphe">
            <span>
              Websites today play many roles for businesses. They’re your face
              to the world, the hub that hosts your content, and often your
              primary means of generating leads and making sales. Designing the
              best possible user experience for the many ways people need to use
              your site is a tremendous challenge, but user experience web
              design is our specialty.
            </span>
          </div>
        </div>
      </div> : <div className="Services-Container"></div>}
    </>
  );
};

export default Services;
