import { createContext, useContext, useEffect, useState } from "react";

export const EmployeeContext = createContext();

const INITITAL_DATA = [];

export const EmployeeProvider = ({ children }) => {
  const [employeesList, setEmployeesList] = useState(
    JSON.parse(localStorage.getItem("employees_data")) || INITITAL_DATA
  );
  useEffect(() => {
    localStorage.setItem("employees_data", JSON.stringify(employeesList));
  }, [employeesList]);
  return (
    <EmployeeContext.Provider value={{ employeesList, setEmployeesList }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);
