import React from "react";

import "./index.css";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResult from "./components/searchResults/SearchResults";

function App() {
  return (
    <div>
      <SearchBar />
      <SearchResult />
    </div>
  );
}

export default App;
