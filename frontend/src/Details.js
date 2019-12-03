// reference file, Details not being used any more

import React from 'react';
import PropTypes from 'prop-types';
import AlbumTitle from './AlbumTitle';

const Details = (props) => {
    return <div className="Details">
        <AlbumTitle title={props.albumTitle}/>
        <ArtistName artist={props.artist}/>
        <AlbumYear year={props.year}/>
        <AlbumGenre genre={props.genre}/>
    </div>
}

Details.propTypes = {
    artist: PropTypes.string.isRequired,
    albumTitle: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
}

Details.defaultProps = {
    artist: "Artist Unknown",
    albumTitle: "Title Unknown",
    year: "Year Unknown",
    genre: "Genre Unknown"
}

const ArtistName = ({artist}) => {
    return <div className="Artist">
        {artist} 
    </div>
}

const AlbumYear = ({year}) => {
    return <div className="Year">
        {year}
    </div>
}

const AlbumGenre = ({genre}) => {
    return <div className="Genre">
        {genre}
    </div>
}

export default Details;