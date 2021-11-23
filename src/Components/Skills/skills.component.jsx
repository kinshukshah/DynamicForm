import React from "react";
import { SimpleInput } from "../SimpleInput/simpleInput.component";
import "./skills.style.css";
export const Skills = ({
  skillsObj,
  setSkillsObj,
  errorMsg,
  errors,
  setErrors,
}) => {
  const handleAddSkill = () => {
    const totaLen = Object.keys(skillsObj).length;
    setSkillsObj((skill) => ({
      ...skill,
      [`skill${totaLen + 1}`]: "",
    }));
  };
  const handleSkillsOnChange = (e) => {
    if (errors.skills !== "") {
      setErrors((err) => ({ ...err, skills: "" }));
    }
    setSkillsObj((skill) => ({
      ...skill,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="skills">
      <div className="skills-input-label">
        <div className="skills-label">Skills:</div>
        <div className="skills-inputs">
          {Object.keys(skillsObj).map((ele, idx) => {
            return (
              <div key={idx} className="skill-box">
                <SimpleInput
                  label={ele}
                  name={ele}
                  value={skillsObj[ele]}
                  onChange={handleSkillsOnChange}
                  style={{ width: "100px", margin: "0 10px 10px 0" }}
                />
                {Object.keys(skillsObj).length === idx + 1 && (
                  <button className="add-style-btn" onClick={handleAddSkill}>
                    +
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {errorMsg && <div className="form-field-error">{errorMsg}</div>}
    </div>
  );
};
