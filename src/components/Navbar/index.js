import React, { useState } from "react";
import InputContext from "../../context/InputContext";
import { useContext } from "react";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState(""); // Create a state for the search term

  const { setSearchValue } = useContext(InputContext); // Get the setSearchValue function from the context

  const handleSubmit = (e) => { // Create a function to handle the form submission
    e.preventDefault();
    setSearchValue(searchTerm);
  };

  const handleInputChange = (e) => { // Create a function to handle the input change
    setSearchTerm(e.target.value);
  };

  return (
    <div className="navbar">
      <img className="logo" src="./starwarslogo.png" alt="Star Wars Logo" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchinput">Name/Model</label>
        <input
          onChange={handleInputChange}
          value={searchTerm}
          id="searchinput"
          placeholder="Name/Model"
          type="text"
        />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
}

export default Navbar;
