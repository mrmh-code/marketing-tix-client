import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='text-center mt-4'>
            <h1>Not Found Page .You can back home</h1>
            <Link className='btn btn-success' to={'/'}>Back Home</Link>
        </div>
    );
};

export default NotFoundPage;