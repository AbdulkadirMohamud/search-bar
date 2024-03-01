import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar" ;
import NamesData from "./Data.json"

function App() {
    return (
        <div className="App">
            <SearchBar placeholder="Enter your name..." data={NamesData} />
        </div>
    );
}

export default App;
