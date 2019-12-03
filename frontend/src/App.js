import React, {useState} from 'react';
import './App.css';
import Records from './Records';
import Searchbar from './Searchbar';

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App ax-theme--day">
      <Searchbar 
        setSearch={setSearch}
      />
      <Records 
        searchText={search}
      />
    </div>
  );
}

export default App;
