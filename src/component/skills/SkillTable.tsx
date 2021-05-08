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
      <tr>
        <td colSpan={2}>{props["index"]}</td>
      </tr>
      <tr>
        <td>{props["name"]}</td>
        <td>{props["level"]}</td>
      </tr>
    </>
  );
}

export interface SKillRowProps {
  index: string;
  name: string;
  level: string;
}

export default SkillTable;
