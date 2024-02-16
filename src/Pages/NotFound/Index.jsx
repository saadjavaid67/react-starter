import React from 'react';
import Button from '../../Components/Button/Index';

const NotFound = () => {
    return (
        <div>
            Page not found. Goto 
            <Button text="Homepage" url="/"/>
        </div>
    );
}

export default NotFound;
