import { Component } from "react";
import "./styles.css";

export default function App() {
  setState = {
    onSearch: "",
  };
  const mangourl = (
    <fetch className="api">'https://www.themealdb.com/api.php'</fetch>
  );

  onSearch = (event) => {
    this.setState = event.target.value;
  };

  return (
    <div className="App">
      <h1>Meals</h1>
      <a href="Home" className="link" alt="">
        Home
      </a>
      <a href="Home" className="link" alt="">
        About
      </a>
      <a href="Home" className="link">
        Contact
      </a>
      <a href="Home" className="link">
        Pages
      </a>
      <br />
      <div className="searchbar">
        <label for="meals search">Meals Search: </label>
        <input type="text" placeholder="Search For Meals" />
        <div className="">
          <button className="button" onClick="onSearch">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
