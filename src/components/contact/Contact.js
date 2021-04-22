import React, { useState } from "react";
import "./Contact.css";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { AiTwotonePhone } from "@react-icons/all-files/ai/AiTwotonePhone";
import { HiLocationMarker } from "@react-icons/all-files/hi/HiLocationMarker";


const Contact = () => {
  const [ContactAnimation , setContactAnimation] = useState(false)
  const showitems = ()=> {
    if(window.scrollY >= 2500 ){
      setContactAnimation(true)
    }else{
      setContactAnimation(false)
    }
}
  window.addEventListener('scroll',showitems)
  return (
    <>
    <div id='Contact--id'></div>
      {ContactAnimation ? <div className="Contact-Container">
        <div className="Contact-Information">
          <div className="Information-Box">
            <div className="Box-Icon">
              <MdEmail size={30} />
            </div>
            <div className="Box-Text">
              <span>ABDOUFAFA1921@GMAIL.COM</span>
            </div>
          </div>
          <div className="Information-Box">
            <div className="Box-Icon">
              <AiTwotonePhone size={30} />
            </div>
            <div className="Box-Text">
              <span>+213657217260</span>
            </div>
          </div>
          <div className="Information-Box">
            <div className="Box-Icon">
              <HiLocationMarker size={30} />
            </div>
            <div className="Box-Text">
              <span>EL BIAR ALGER</span>
            </div>
          </div>
        </div>

        <div className="Contact-Form">
          <div className="Form-Information">
            <div className="Form-Input">
              <div class="form">
                <input type="text" name="text" autocomplete="off" required />
                <label for="text" class="label-name">
                  <span class="content-name"> Name</span>
                </label>
              </div>
            </div>
            <div className="Form-Input">
            <div class="form">
                <input type="text" name="text" autocomplete="off" required />
                <label for="text" class="label-name">
                  <span class="content-name">E-Mail</span>
                </label>
              </div>
            </div>
          </div>
          <div className="Form-Submit">
          <div class="form">
                <input type="text" name="text" autocomplete="off" required />
                <label for="text" class="label-name">
                  <span class="content-name">Message</span>
                </label>
              </div>
          </div>
          <div className="Form-Submit-btn">
            <span>Send</span>
          </div>
        </div>
      </div> : <div className="Contact-Container"></div>}
    </>
  );
};

export default Contact;
