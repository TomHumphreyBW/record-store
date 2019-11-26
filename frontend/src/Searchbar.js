import React, {useState} from 'react';
import Record from './Record.js';
import './Searchbar.css';

const Searchbar = ({setSearch}) => {
    const [innerSearch, setInnerSearch] = useState('') 
     return <div className="Searchbar">
         <form
            onSubmit={ (event) => {
                console.log('submitted');
                event.preventDefault();
                setSearch(innerSearch)
            }} 
        >
            <input 
                placeholder="Search albums"
                type="text" 
                onChange={(event) => {
                    setInnerSearch(event.target.value)    
                }}
            />
            <button 
                type="submit"
            >
                Search
            </button>
        </form>
     </div>
 }

 export default Searchbar;