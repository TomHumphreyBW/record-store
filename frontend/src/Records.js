import React from 'react';
import Record from './Record.js';
import './Records.css';

const records = [
    {
        "artist": "Pink Floyd",
        "albumName": "Wish You Were Here",
        "year": "1975",
        "genre": "Progressive Rock",
        "price": "£9.99",
        "coverArt": "wishyouwerehere.jpeg"
    },
    {
        "artist": "Tool",
        "albumName": "Aenima",
        "year": "1996",
        "genre": "Progressive Rock",
        "price": "£9.99",
        "coverArt": "aenima.jpeg"
    }
];
//
 const Records = () => {
     return <div className="Records">
         {records.map((item) => {
             return <Record {...item} 
             />
         })}
     </div>
 }

 export default Records;
