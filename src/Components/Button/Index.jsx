import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const { text, url } = props;

    return (
        <Link to={url}>{text}</Link>
    );
}

export default Button;
