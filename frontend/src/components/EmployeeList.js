import React, { useState, useEffect } from "react";
import { getEmployees, addEmployee } from "../api/employees";  // Import API functions
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]); // Default value is an empty array
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    position: "",
    start_date: "",
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        if (Array.isArray(data)) {
          setEmployees(data);  // Only set the employees state if it's an array
        } else {
          setEmployees([]);  // If data is not an array, set employees to an empty array
        }
      } catch (error) {
        console.error("Error fetching employees", error);
        setEmployees([]);  // Set to empty array if there's an error
      }
    };
    fetchEmployees();
  }, []);  // Empty array ensures this runs only once when the component mounts
  

  // Handle form submission to add a new employee
  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/employees", newEmployee);
      // Assuming the backend returns the updated list of employees
      console.log("Response data:", response.data);
      const updatedEmployees = response.data;
      setEmployees(updatedEmployees);  // Update the state with the new list of employees
      setNewEmployee({ name: "", email: "", position: "", start_date: "" });  // Reset form
    } catch (error) {
      console.error("Error adding employee:", error);
      console.error("Error adding employee:", error);
    }
  };
  

  return (
    <div>
      <h2>Employee List</h2>
      {Array.isArray(employees) && employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {employees && employees.map((employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.position}
            </li>
          ))}
        </ul>
      )}
  
      <h3>Add New Employee</h3>
      <form onSubmit={handleAddEmployee}>
        <input
          type="text"
          placeholder="Name"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newEmployee.email}
          onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          value={newEmployee.position}
          onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
        />
        <input
          type="date"
          value={newEmployee.start_date}
          onChange={(e) => setNewEmployee({ ...newEmployee, start_date: e.target.value })}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
  
  
};  

export default EmployeeList;
