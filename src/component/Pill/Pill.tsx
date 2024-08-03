import React, { FunctionComponent, RefObject } from "react";
import "./Pill.scss";

interface PillProps {
  haveIcon: boolean;
  text: string;
  haveHover?:boolean;
  myref?:RefObject<HTMLDivElement>;
  tag?:boolean;
}

const Pill: FunctionComponent<PillProps> = ({haveIcon,text,haveHover=false,myref,tag=false}) => {
  return (
    <div className={"pill " + (haveHover ? " hover" : "") + (tag ? "tag" : "")} ref={myref}>
        {haveIcon && <div className="round">
          <div className="round-motion"></div>
          
          </div>}
        <p>{text}</p>
    </div>
  );
};

export default Pill;
