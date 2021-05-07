import React from "react";
import "component/profile/Profile.scss";

function TimeEvent(props: TimeEventProps) {
  return (
    <li>
      <span className="tl-date">{props["date"]}</span>
      <div className="tl-content">
        <div className="tl-topic">{props["topic"]}</div>
        {props["content"].map((val) => (
          <p>* {val}</p>
        ))}
      </div>
    </li>
  );
}

export interface TimeEventProps {
  date: string;
  topic: string;
  content: string[];
}

export default TimeEvent;
