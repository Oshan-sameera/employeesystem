import "./App.css";
import { useState } from "react";
import Axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeList] = useState([]);

  const addEmployee = () => {
    Axios.post("https://my-first-app-osh.herokuapp.com/create", {
      // Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success");
    });
  };

  const getEnployees = () => {
    //Axios.get("http://localhost:3001/employees").then((response) => {
      Axios.get("https://my-first-app-osh.herokuapp.com/employees").then((response) => {
      setEmployeList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage:</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <hr />
      <div className="employees">
        <button onClick={getEnployees}>Show Employees</button>
        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <h3>Name: {val.name}</h3>
              <h3>Age :{val.age}</h3>
              <h3>country :{val.country}</h3>
              <h3>Position: {val.position}</h3>
              <h3>Wage :{val.wage}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
