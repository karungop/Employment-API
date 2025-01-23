import axios from "axios";

const API_URL = "http://localhost:5000/api/employees";

// Function to get all employees
export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL);  // GET request to backend
    return response.data;  // Return the response data (employee list)
  } catch (error) {
    console.error("Error fetching employees", error);
  }
};

// Function to add a new employee
export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData);  // POST request to backend
    return response.data;
  } catch (error) {
    console.error("Error adding employee", error);
  }
};
