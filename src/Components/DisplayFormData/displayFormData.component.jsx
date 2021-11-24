import React, { useState } from "react";
import { useEmployees } from "../../Contexts/employeeContext";
import { CustomBtn } from "../CustomButton/customBtn.component";
import "./displayFormData.style.css";
export const DisplayFormData = () => {
  const { employeesList } = useEmployees();
  const [viewData, setViewData] = useState(false);
  return (
    <>
      <CustomBtn
        label={viewData ? "Close View Data" : "View Data"}
        style={{ width: "15%", margin: "1rem 0" }}
        onClick={() => setViewData((data) => !data)}
      />
      {viewData && (
        <div className="display-data">
          {employeesList.length > 0 &&
            employeesList.map((employee, idx) => {
              return (
                <div className="employee" key={idx}>
                  <div className="employee-number">{`Employee#${idx + 1}`}</div>
                  <div className="employee-name employee-item">
                    <div className="employee-label">Name:</div>
                    <div className="employee-name-content">{employee.name}</div>
                  </div>
                  <div className="employee-designation employee-item">
                    <div className="employee-label">Designation:</div>
                    <div className="employee-designation-content">
                      {employee.designation}
                    </div>
                  </div>
                  <div className="employee-contact employee-item">
                    <div className="employee-label">Contact:</div>
                    <div className="employee-contact-content">
                      {employee.Contact.map((contact, idx) => (
                        <div className="contact-info" key={idx}>
                          <div className="employee-contact-type">
                            {`${contact.type}-`}{" "}
                          </div>
                          <div className="employee-contact-number">
                            {contact.number}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="employee-skills employee-item">
                    <div className="employee-label">Skills:</div>
                    <div className="employee-skills-content">
                      {employee.skills.map((item) => `${item},`)}
                    </div>
                  </div>
                  <div className="employee-dob employee-item">
                    <div className="employee-label">DOB:</div>
                    <div className="employee-dob-content">{employee.dob}</div>
                  </div>
                </div>
              );
            })}
          {employeesList.length === 0 && (
            <div className="no-data">No Data Available! Please Add them</div>
          )}
        </div>
      )}
      {viewData && (
        <a
          type="button"
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(employeesList)
          )}`}
          download="EmployeeData.json"
          style={{ listStyle: "none", textDecoration: "none" }}
        >
          <CustomBtn
            style={{ width: "15%", margin: "1rem 0" }}
            label="Download JSON"
          />
        </a>
      )}
    </>
  );
};
