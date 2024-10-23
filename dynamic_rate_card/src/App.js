import React, {useState} from 'react';
import './App.css';

const data = [
  // Sample data from your JSON file (Replace with code to fetch json file)
  {
    productType: "Neptune GameTime",
    partnerName: "Partner A",
    partnerType: "Type 1",
    state: "CA",
    city: "Los Angeles",
    zip: "90001",
    dma: "DMA1",
    datesOfOperation: "2024-01-01 to 2024-12-31",
    attendanceRate: "5000",
    price: "$2000"
  },
  {
    productType: "Neptune Radio",
    partnerName: "Partner B",
    partnerType: "Type 2",
    state: "TX",
    city: "Houston",
    zip: "77001",
    dma: "DMA2",
    datesOfOperation: "2024-02-01 to 2024-10-31",
    attendanceRate: "3000",
    price: "$1500"
  },
  // Add more rows as needed
];

function App() {
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Product Type</th>
            <th>Partner Name</th>
            <th>Partner Type</th>
            <th>State</th>
            <th>City</th>
            <th>ZIP</th>
            <th>DMA</th>
            <th>Dates of Operation</th>
            <th>Annual Attendance Rate</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td>{row.productType}</td>
              <td>{row.partnerName}</td>
              <td>{row.partnerType}</td>
              <td>{row.state}</td>
              <td>{row.city}</td>
              <td>{row.zip}</td>
              <td>{row.dma}</td>
              <td>{row.datesOfOperation}</td>
              <td>{row.attendanceRate}</td>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
