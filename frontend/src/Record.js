import React from 'react';
import './Record.css';

//
 const Record = ({id}) => {
     return <div className="Record">
         <CoverArt />
         <Details />
     </div>
 }

 const CoverArt = ({image}) => {
    return <div className="CoverArt">
        image
    </div>
}

const Details = ({details}) => {
    return <div className="Details">
        Album Title
        Artist
        Year
        Genre
    </div>
}
 export default Record;