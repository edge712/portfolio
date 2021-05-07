import React from "react";
import "component/profile/Profile.scss";

function TimeEvent(props: TimeEventProps) {
  return (
    <li>
      <span className="tl-date">{props["date"]}</span>
      <div className="tl-content">
        <span className="tl-topic">{props["topic"]}</span>
        {props["content"]}
      </div>
    </li>
  );
}

export interface TimeEventProps {
  date: string;
  topic: string;
  content: string;
}

export default TimeEvent;
