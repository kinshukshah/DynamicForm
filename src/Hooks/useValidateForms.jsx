import React, { useState } from "react";

export const useValidateForms = (data) => {
  const [errors, setErrors] = useState({
    name: "",
    designation: "",
    dob: "",
    skills: "",
    contact: "",
    success: "",
  });
  // Below function string contains number taken from stack overflow
  const stringContainsNumber = (text) => {
    return /\d/.test(text);
  };

  const validateNameField = (name) => {
    if (name === "") {
      return { success: false, errorMsg: "Name Field is Required" };
    }
    if (stringContainsNumber(name)) {
      return { success: false, errorMsg: "Name should only contain alphabets" };
    }
    return { success: true };
  };

  const validateSkillsField = (skills) => {
    for (let i = 0; i < skills.length; i++) {
      if (skills[i] === "")
        return { success: false, errorMsg: "Skill Field Cannot be empty" };
    }
    return { success: true };
  };

  const validateContactField = (contacts) => {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].type === "" || contacts[i].number === "") {
        return {
          success: false,
          errorMsg: "Contact and Type Field cannot be empty",
        };
      } else if (isNaN(contacts[i].number)) {
        return {
          success: false,
          errorMsg: "Contact cannot contain alphabets or special characters",
        };
      } else if (contacts[i].number.length !== 10) {
        return {
          success: false,
          errorMsg: "Contact should contain 10 digit",
        };
      }
    }
    return { success: true };
  };

  const checkNoErrors = (tempErr) => {
    let errArr = Object.keys(tempErr);
    for (let i = 0; i < errArr.length; i++) {
      if (tempErr[errArr[i]] !== "") {
        return false;
      }
    }
    return true;
  };

  const validateForm = (data) => {
    let tempError = {
      name: "",
      designation: "",
      dob: "",
      skills: "",
      contact: "",
    };
    const isNameFieldValidate = validateNameField(data.name);
    tempError.name = isNameFieldValidate.success
      ? ""
      : isNameFieldValidate.errorMsg;
    tempError.designation =
      data.designation === "" ? "Designation is Required" : "";
    const isSkillsFieldValidate = validateSkillsField(data.skills);
    tempError.skills = isSkillsFieldValidate.success
      ? ""
      : isSkillsFieldValidate.errorMsg;
    tempError.dob = data.dob === "" ? "Date of Birth is Required" : "";
    const isContactFieldsValidate = validateContactField(data.Contact);
    tempError.contact = isContactFieldsValidate.success
      ? ""
      : isContactFieldsValidate.errorMsg;
    const isNoErrors = checkNoErrors(tempError);
    return isNoErrors ? { success: true } : { ...tempError, success: false };
  };

  return {
    errors,
    validateForm,
    setErrors,
  };
};
