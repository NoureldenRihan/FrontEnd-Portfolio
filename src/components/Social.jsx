import React from "react";
import bluesky from "../SVGs/bluesky.svg";
import twitter from "../SVGs/twitter.svg";
import github from "../SVGs/github.svg";
import linkedin from "../SVGs/linkedin.svg";

function Social() {
  return (
    <div className="social-links">
      <div className="social-link">
        <a href="https://bsky.app/profile/noureldenrihan.bsky.social">
          <img src={bluesky} alt="Bluesky Link" />
        </a>
      </div>

      <div className="social-link">
        <a href="https://x.com/Nour_Rihan_">
          <img src={twitter} alt="Twitter Link" />
        </a>
      </div>

      <div className="social-link">
        <a href="https://github.com/NoureldenRihan">
          <img src={github} alt="Github Link" />
        </a>
      </div>

      <div className="social-link">
        <a href="https://www.linkedin.com/in/noureldenrihan/">
          <img src={linkedin} alt="Linkedin Link" />
        </a>
      </div>
    </div>
  );
}

export default Social;
