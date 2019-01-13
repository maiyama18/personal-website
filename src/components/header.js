import React from 'react';
import { Link } from 'gatsby';
import { Container, Menu } from 'semantic-ui-react';

export default ({ title }) => (
    <Menu attached inverted borderless size={'huge'} color={'grey'} style={{ marginBottom: '1rem' }}>
        <Container>
            <Menu.Item>
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

