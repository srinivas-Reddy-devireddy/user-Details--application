import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/bae7afa1-984f-4978-b553-8c72169d147c"
        );

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="user-container">
        <h1>User Details</h1>
        <button>ADD USER</button>
        <table className="api-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>City</th>
              <th>TotalAmount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.GuestName}</td>
                <td>{item.Gender}</td>
                <td>{item.Email}</td>
                <td>{item.City}</td>
                <td>{item.GrandTotal}</td>
                <td>{item.RoomStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
