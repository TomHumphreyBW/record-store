import React, { useState, useEffect } from 'react';
import Record from './Record.js';
import './Records.css';
import { getRecords } from './request.js';
import { sortByAlbum, sortByArtist, sortByYear, sortByGenre } from './utils/sorting.js';

const Records = ({ searchText, sort }) => {
    const [records, setRecords] = useState([])
    useEffect(() => {
        getRecords().then(records => {
            setRecords(records)
        })
    }, []);

    const filteredRecords = records.filter(record => {
        if (searchText === '') {
            return true;
        }

        const recordProps = [record.albumTitle, record.year, record.artist, record.genre]

        if (recordProps.some((prop) => prop.toLowerCase() === searchText.toLowerCase())) {
            return true;
        }
        return false;
    })

    const sortMapping = {
        artist: sortByArtist,
        album: sortByAlbum,
        year: sortByYear,
        genre: sortByGenre
    }

    const sortedRecords = filteredRecords.sort(sortMapping[sort])



    // this should probably go in its own api error component
    if (!Array.isArray(records)) {
        return <div className="error">
            Could not retrieve Records
         </div>
    }

    return <div className="Records">
        {sortedRecords.map((item) => {
            return <Record
                key={`${item.albumTitle}-${item.artist}`}
                artist={item.artist}
                albumTitle={item.albumTitle}
                year={item.year}
                genre={item.genre}
                price={item.price}
                coverArt={item.coverArt}
            />
        })}
    </div>
}

export default Records;
