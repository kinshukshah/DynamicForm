import React from "react";
import { SimpleInput } from "../SimpleInput/simpleInput.component";
import "./contactDetails.style.css";
export const ContactDetails = ({
  contactObj,
  setContactsObj,
  errorMsg,
  errors,
  setErrors,
}) => {
  const handleAddContact = () => {
    const totaLen = Object.keys(contactObj).length;
    setContactsObj((skill) => ({
      ...skill,
      [`contact${totaLen + 1}`]: { type: "", number: "" },
    }));
  };
  const handleContactsOnChange = (e) => {
    if (errors.contact !== "") {
      setErrors((err) => ({ ...err, contact: "" }));
    }
    const parentClassName = e.target.parentNode.className.split(" ")[0];
    setContactsObj((contacts) => ({
      ...contacts,
      [parentClassName]: {
        ...contacts[parentClassName],
        [e.target.name]: e.target.value,
      },
    }));
  };
  return (
    <div className="contact-details">
      <div className="contact-input-label">
        <div className="contact-label">Contact Details</div>
        <div className="contact-input">
          {Object.keys(contactObj).map((ele, idx) => {
            return (
              <div className={`${ele} contact-box`} key={idx}>
                <SimpleInput
                  name="type"
                  label="type"
                  value={contactObj[ele].type}
                  onChange={handleContactsOnChange}
                  style={{ width: "35%", margin: "0 10px 10px 0" }}
                />
                <SimpleInput
                  name="number"
                  label="Phone Number"
                  value={contactObj[ele].number}
                  onChange={handleContactsOnChange}
                  style={{ width: "35%", margin: "0 10px 10px 0" }}
                />
                {Object.keys(contactObj).length === idx + 1 && idx + 1 < 4 && (
                  <button
                    className="add-contact-btn"
                    onClick={handleAddContact}
                  >
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
