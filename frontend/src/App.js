import React, { useState } from 'react';
import './App.css';
import Records from './Records';
import Searchbar from './Searchbar';

function App() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  return (
    <div className="App ax-theme--day">
      <Searchbar
        setSearch={setSearch}
        setSort={setSort}
        sort={sort}
      />
      <Records
        searchText={search}
        sort={sort}
      />
    </div>
  );
}

export default App;
