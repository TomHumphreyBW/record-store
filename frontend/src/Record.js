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
        <AlbumTitle />
        <ArtistName />
        <AlbumYear />
        <AlbumGenre />
    </div>
}

const AlbumTitle = ({title}) => {
    return <div className="Title">
        Title
    </div>
}

const ArtistName = ({artist}) => {
    return <div className="Artist">
        Artist 
    </div>
}

const AlbumYear = ({year}) => {
    return <div className="Year">
        Year
    </div>
}

const AlbumGenre = ({genre}) => {
    return <div className="Genre">
        Genre
    </div>
}

 export default Record;