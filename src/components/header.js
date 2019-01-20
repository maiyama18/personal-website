import React from 'react';
import { Link } from 'gatsby';
// import { Container, Menu, Image } from 'semantic-ui-react';

const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
}

export default ({ title, iconUrl }) => (
    <div>
        <h1 style={{ margin: 0 }}>
            <Link
                to="/"
                style={{
                    ...linkStyle,
                    fontSize: '2.5rem',
                }}
            >
                <img
                    src={iconUrl}
                    alt={'icon'}
                    style={{
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '50%',
                        marginRight: '0.3rem',
                    }}
                />
                {title}
            </Link>
        </h1>
        <p style={{ margin: '0 0 1rem' }}>
            <Link to="/" style={linkStyle}>
                about
            </Link>
            {' '} | {' '}
            <Link to="/blog" style={linkStyle}>
                blog
            </Link>
            {' '} | {' '}
            <Link to="/diary" style={linkStyle}>
                diary
            </Link>
        </p>
    </div>
);
