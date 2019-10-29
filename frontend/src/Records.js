import React from 'react';
import Record from './Record.js';
import './Records.css';
import request from './request';

const records = [
    1, 2, 3, 4, 5
];

request();
//
 const Records = () => {
     return <div className="Records">
         {records.map((item) => {
             return <Record id={item} />
         })}
     </div>
 }

 export default Records;