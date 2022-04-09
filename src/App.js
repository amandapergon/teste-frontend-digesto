import React from "react";

import "./index.css";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResult from "./components/searchResults/SearchResults";

function App() {
  return (
    <div style={{ backgroundColor: "#5f0c16", height: "100%" }}>
      <SearchBar />
      <SearchResult />
    </div>
  );
}

export default App;
