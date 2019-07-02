import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to="/" className='item'>
                Streamy
            </Link>
            <div className='right menu'>
                <Link to="/" className='item'>
                    All Streams
                </Link>
            </div>
        </div>
    );
};

export default header;