import './App.css';
import { EmployeeForm } from './Components/EmployeeForm/employeeForm.component';
import { DisplayFormData } from './Components/DisplayFormData/displayFormData.component';

function App() {
  return (
    <div className="App">
      <h3>Employee Form</h3>
      <EmployeeForm />
      <DisplayFormData />
    </div>
  );
}

export default App;
