import React, { useState } from "react";
import { ContactDetails } from "../ContactDetails/contactDetails.component";
import { CustomBtn } from "../CustomButton/customBtn.component";
import { InputWithLabel } from "../InputWithLabel/inputWithLabel.component";
import { useValidateForms } from "../../Hooks/useValidateForms";
import { Skills } from "../Skills/skills.component";
import "./employeeForm.style.css";
import { useEmployees } from "../../Contexts/employeeContext";
import {
  EMPLOYEE_CONTACTS_STATE,
  EMPLOYEE_DETAILS_STATE,
  EMPLOYEE_SKILLS_STATE,
} from "../../Utils/data.utils";
export const EmployeeForm = () => {
  const [employeeDetails, setEmployeeDetails] = useState(
    EMPLOYEE_DETAILS_STATE
  );
  const [contactObj, setContactsObj] = useState(EMPLOYEE_CONTACTS_STATE);
  const [skillsObj, setSkillsObj] = useState(EMPLOYEE_SKILLS_STATE);
  const { errors, validateForm, setErrors } = useValidateForms();
  const { employeesList, setEmployeesList } = useEmployees();

  const handleOnChangeEmp = (e) => {
    if (errors[e.target.name] !== "") {
      setErrors((err) => ({ ...err, [e.target.name]: "" }));
    }
    setEmployeeDetails((emp) => ({
      ...emp,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...employeeDetails,
      Contact: Object.values(contactObj),
      skills: Object.values(skillsObj),
      dob:
        employeeDetails.dob === ""
          ? ""
          : `${new Date(employeeDetails.dob).getDate()}-${new Date(
              employeeDetails.dob
            ).toLocaleDateString(undefined, { month: "short" })}-${new Date(
              employeeDetails.dob
            ).getFullYear()}`,
    };
    const isValid = validateForm(data);
    if (isValid.success) {
      setEmployeesList((employees) => [...employees, data]);
      setContactsObj(EMPLOYEE_CONTACTS_STATE);
      setSkillsObj(EMPLOYEE_SKILLS_STATE);
      setEmployeeDetails(EMPLOYEE_DETAILS_STATE);
    } else {
      setErrors({ ...isValid });
    }
  };

  return (
    <form className="employee-form">
      <h4>{`Employee ${employeesList.length + 1}`}</h4>
      <InputWithLabel
        label="Name"
        name="name"
        value={employeeDetails.name}
        onChange={handleOnChangeEmp}
        errorMsg={errors.name}
      />
      <InputWithLabel
        label="Designation"
        name="designation"
        value={employeeDetails.designation}
        onChange={handleOnChangeEmp}
        errorMsg={errors.designation}
      />
      <ContactDetails
        contactObj={contactObj}
        setContactsObj={setContactsObj}
        errorMsg={errors.contact}
        errors={errors}
        setErrors={setErrors}
      />
      <Skills
        skillsObj={skillsObj}
        setSkillsObj={setSkillsObj}
        errorMsg={errors.skills}
        errors={errors}
        setErrors={setErrors}
      />
      <InputWithLabel
        label="DOB"
        type="date"
        name="dob"
        value={employeeDetails.dob}
        onChange={handleOnChangeEmp}
        errorMsg={errors.dob}
      />
      <CustomBtn
        type="submit"
        label="Add Employee"
        onClick={handleSubmit}
        style={{ width: "20%" }}
      />
    </form>
  );
};
