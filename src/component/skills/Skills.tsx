import React from "react";
import "component/skills/Skills.scss";
import "component/skills/SkillTable";
import SkillTable from "component/skills/SkillTable";
function Skills() {
  return (
    <div className="skills clearfix" id="Skills">
      <h1>
        <i className="fas fa-wrench"></i>Skills
      </h1>
      <hr></hr>
      <SkillTable></SkillTable>
    </div>
  );
}

export default Skills;
