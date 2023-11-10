import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {

    const param = useParams();
    console.log(param);
    return (
        <div>
            <h2>Detail page</h2>
            <h1>{param.id}</h1>
        </div>
    );
}

export default Detail;
