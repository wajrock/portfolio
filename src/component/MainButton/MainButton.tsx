import React, { FunctionComponent, RefObject } from "react";
import "./MainButton.scss";

const MainButton: FunctionComponent<{myref:RefObject<HTMLDivElement>,lang:string}> = ({myref,lang}) => {
  return (
    <a href="mailto:thibaud.wajrock@icloud.com"><div className="main-button"  ref={myref}>
        <div className="left-circle"></div>
        <div className="main-button-texts">
          <p className="main-button-texts__first">{lang === "en" ? ("Contact me") : ("Contactez moi")}</p>
          <p className="main-button-texts__second">{lang === "en" ? ("By e-mail") : ("Par e-mail")}</p>
        </div>
        <div className="right-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <g clip-path="url(#clip0_180_170)">
              <path d="M10.7193 4.25L15.9693 9.5L10.7193 14.75M3.03027 9.5H15.5003" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/>
            </g>
            <defs>
              <clipPath id="clip0_180_170">
                <rect width="17" height="18" fill="currentColor" transform="translate(0.5 0.5)"/>
              </clipPath>
            </defs>
          </svg>

          <div className="right-circle-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <g clip-path="url(#clip0_180_170)">
              <path d="M10.7193 4.25L15.9693 9.5L10.7193 14.75M3.03027 9.5H15.5003"  stroke-width="1.5" stroke-miterlimit="10"/>
            </g>
            <defs>
              <clipPath id="clip0_180_170">
                <rect width="17" height="18" fill="currentColor" transform="translate(0.5 0.5)"/>
              </clipPath>
            </defs>
          </svg>
          
        </div>

        </div>
    </div></a>
  );
};

export default MainButton;
