import React from 'react';
import Layout from '../components/layout';
import { Card, Image } from 'semantic-ui-react';

const Index = () => (
    <Layout>
        <h2>Profile</h2>
        <ul>
            <li>Born in 1990</li>
        </ul>

        <h2>Skills</h2>
        <ul>
            <li>Typescript/Javascript, Ruby, Go, Python, Shell script</li>
            <li>React.js, Ruby on Rails</li>
            <li>Firebase</li>
            <li>Scientific writing (in Japanese/English)</li>
        </ul>

        <h2>Accounts</h2>
        <ul>
            <li>github: <a href={'https://github.com/muiscript'}>muiscript</a></li>
            <li>qiita: <a href={'https://qiita.com/ymr-39'}>ymr-39</a></li>
            <li>npm: <a href={'https://npm.com/yam-net'}>yam-net</a></li>
        </ul>

        <h2 style={{ marginBottom: '1.5rem' }}>Websites</h2>
        <Card.Group itemsPerRow={'3'} stackable>
            <Card>
                <Card.Content>
                    <Card.Header>Profile (this site)</Card.Header>
                    <Card.Description>Personal website</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    JavaScript, Gatsby.js
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header>Profile (this site)</Card.Header>
                    <Card.Description>Personal website</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    JavaScript, Gatsby.js
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header>Profile (this site)</Card.Header>
                    <Card.Description>Personal website</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    JavaScript, Gatsby.js
                </Card.Content>
            </Card>
        </Card.Group>
    </Layout>
);

export default Index;
