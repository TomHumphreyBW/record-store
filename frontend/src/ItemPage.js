import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecord } from './request.js';

const ItemPage = ({ children }) => {
    const { id } = useParams();
    const [record, setRecord] = useState({})
    useEffect(() => {
        getRecord(id).then(record => {
            setRecord(record)
        })
    }, [id]);

    return (
        <div>
            {record.artist}
        </div>
    );
};

export default ItemPage;
