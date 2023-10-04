import React, { useState } from 'react';
import { Link } from "react-router-dom";
import data from "../../data.json";
import './Homepage.css'; // Import your CSS file if you have one

function Homepage() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="warehousename">
      <h1>WAREHOUSENAME SEARCH</h1>
      <input
        type="text"
        placeholder="Search name"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <Link to={`warehouse/${item.id}`}>
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage; // Export the Homepage component
