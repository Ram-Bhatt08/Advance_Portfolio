import React from "react";
import "./Orbit.css";
import Resume from "./Resume.pdf";
import git from './git.png';
import insta from './insta.jpg';
import leet from './leet.png';
import linkedin from './linkedin.png';
import mail from './mail.png';
import ninja from './ninja.jpg';
import unstop from './unstop.png';
import whatsapp from './whatsapp.png';

function Orbit() {
  // Function to handle link opening with confirmation for external sites
  const handleLinkClick = (e, url) => {
    // For non-email links, you might want to add a confirmation
    if (!url.startsWith('mailto:')) {
      const proceed = window.confirm(`You are about to be redirected to ${url}\nDo you want to proceed?`);
      if (!proceed) {
        e.preventDefault();
      }
    }
    // The link will still open naturally via the anchor tag
  };

  return (
    <div className="solar-system">
      {/* Sun (Resume) */}
      <a href={Resume} download="RamBhatt_Resume.pdf" className="sun">
  Resume
</a>
      {/* First Orbit (GitHub) */}
      <div className="orbit mercury">
        <a 
          href="https://github.com/Ram-Bhatt08" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick(e, "https://github.com/Ram-Bhatt08")}
        >
          <img src={git} alt="GitHub" />
        </a>
      </div>

      {/* Second Orbit (LinkedIn) */}
      <div className="orbit venus">
        <a 
          href="https://www.linkedin.com/in/ram-bhatt-12390a253/" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick(e, "https://www.linkedin.com/in/ram-bhatt-12390a253/")}
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>

      {/* Third Orbit (LeetCode) */}
      <div className="orbit earth">
        <a 
          href="https://leetcode.com/u/The_Ram_Bhatt/" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick(e, "https://leetcode.com/u/The_Ram_Bhatt/")}
        >
          <img src={leet} alt="LeetCode" />
        </a>
      </div>

      {/* Fourth Orbit (Unstop) */}
      <div className="orbit mars">
        <a 
          href="https://unstop.com/u/rambha6950" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick(e, "https://unstop.com/u/rambha6950")}
        >
          <img src={unstop} alt="Unstop" />
        </a>
      </div>

      {/* Fifth Orbit (CodeStudio) */}
      <div className="orbit jupiter">
        <a 
          href="https://www.naukri.com/code360/profile/8e0e485d-9d80-4c46-858b-9ef9100c5e53" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick(e, "https://www.naukri.com/code360/profile/8e0e485d-9d80-4c46-858b-9ef9100c5e53")}
        >
          <img src={ninja} alt="CodeStudio" />
        </a>
      </div>

      {/* Sixth Orbit (Gmail) */}
      <div className="orbit saturn">
        <a 
          href="mailto:the.ram.bhatt@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick(e, "mailto:the.ram.bhatt@gmail.com")}
        >
          <img src={mail} alt="Gmail" />
        </a>
      </div>

      {/* Seventh Orbit (WhatsApp) */}
      <div className="orbit uranus">
        <a 
          href="https://wa.me/+918630337415" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick(e, "https://wa.me/+918630337415")}
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>

      {/* Eighth Orbit (Instagram) */}
      <div className="orbit neptune">
        <a 
          href="https://www.instagram.com/accounts/login/?next=%2Fthe_ram_bhatt%2F&source=omni_redirect" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick(e, "https://www.instagram.com/accounts/login/?next=%2Fthe_ram_bhatt%2F&source=omni_redirect")}
        >
          <img src={insta} alt="Instagram"/>
        </a>
      </div>
    </div>
  );
}

export default Orbit;
