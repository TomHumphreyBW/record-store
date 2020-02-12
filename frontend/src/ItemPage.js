import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecord } from './request.js';
import Record from './Record.js';

const ItemPage = () => {
    const { id } = useParams();
    const [record, setRecord] = useState({})
    useEffect(() => {
        getRecord(id).then(record => {
            setRecord(record)
        })
    }, [id]);

    return (
        <Record
            id={record.id}
            artist={record.artist}
            albumTitle={record.albumTitle}
            year={record.year}
            genre={record.genre}
            price={record.price}
            coverArt={record.coverArt}
        />
    );
};

export default ItemPage;
