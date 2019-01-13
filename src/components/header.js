import React from 'react';
import { Link } from 'gatsby';
import { Container, Menu, Image } from 'semantic-ui-react';

export default ({ title, iconUrl }) => (
    <Menu attached inverted borderless size={'huge'} style={{ marginBottom: '1rem' }}>
        <Container>
            <Menu.Item fitted={'horizontally'}>
                {/*<Image avatar src={iconUrl}/>*/}
                <Link to="/">{title}</Link>
            </Menu.Item>

            <Menu.Menu position={'right'}>
                <Menu.Item>
                    <Link to="/diary">diary</Link>
                </Menu.Item>
            </Menu.Menu>

        </Container>
    </Menu>
);

