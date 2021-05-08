import React from "react";
import "component/skills/Skills.scss";
import { skills } from "../../const/vars";

function SkillTable(props) {
  return (
    <div className="skillTable">
      <table>
        <tbody>
          {skills.map((val) => (
            <Row {...val}></Row>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Row(props: SKillRowProps) {
  return (
    <>
      <tr className="colSpan">
        <td colSpan={2}>{props["index"]}</td>
      </tr>
      {props["skills"].map((val) => (
        <tr>
          <td>{val["name"]}</td>
          {(() => {
            if (val["level"] === "Expert") {
              return <td className="expert"> {val["level"]}</td>;
            } else if (val["level"] === "Working") {
              return <td className="working"> {val["level"]}</td>;
            } else {
              return <td className="others"> {val["level"]}</td>;
            }
          })()}
        </tr>
      ))}
    </>
  );
}

export interface SKillRowProps {
  index: string;
  skills: SkillProps[];
}

export interface SkillProps {
  name: string;
  level: string;
}
export default SkillTable;
