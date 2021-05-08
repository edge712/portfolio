import React from "react";
import "component/skills/Skills.scss";
import "component/skills/SkillTable";
import SkillTable from "component/skills/SkillTable";
function Skills() {
  return (
    <div className="skills" id="Skills">
      <h1>
        <i className="fas fa-globe fa-page fa-fw"></i>Skils
      </h1>
      <hr></hr>
      <SkillTable></SkillTable>
    </div>
  );
}

export default Skills;
