import React from 'react';
import { Link, } from 'gatsby';

export default ({ title }) => (
    <div>
        <h1>{title}</h1>
        <Link to="/diary">diary</Link>
    </div>
);

