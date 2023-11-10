import React from 'react';
import { useParams } from 'react-router-dom';


const AboutDetail = () => {

    const param = useParams()

    console.log(param);
    return (
        <div>
            <h1>About detail page</h1>
            <h2>{param.detail}</h2>
        </div>
    );
}

export default AboutDetail;
