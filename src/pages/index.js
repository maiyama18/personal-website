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

        <h2 style={{ marginTop: '1.5rem' }}>Codes</h2>
        <ul>
            <li><a href={'https://github.com/muiscript/rb-monkey'}>rb-monkey</a>: Ruby implementation of <a href={''}>Monkey programming language</a></li>
            <li><a href={'https://github.com/muiscript/cli-2048-java'}>cli-2048-java</a>: command line <a href={'https://play2048.co/'}>2048</a> written in Java</li>
        </ul>

        <h2>Writings</h2>
        <h4>react.js/redux.js</h4>
        <ul>
            <li><a href={'https://qiita.com/muiscript/items/b4ca1773580317e7112e'}>react-router@v4を使ってみよう：シンプルなtutorial</a></li>
            <li><a href={'https://qiita.com/muiscript/items/573247b12ff0bc4e5d3c'}>React+Redux+Express+MongoDBでものすごくシンプルなCRUDアプリをつくる</a></li>
            <li><a href={'https://qiita.com/muiscript/items/63386fd65c7e9f06f5d4'}>reduxで非同期処理をするいくつかの方法（redux-thunk、redux-saga）</a></li>
            <li><a href={'https://qiita.com/muiscript/items/1882afaffd1163e953c4'}>typescriptでreact/reduxアプリを作るときにどこに何をどのように書けばいい感じになるか（の一例）</a></li>
        </ul>
        <h4>statistics</h4>
        <ul>
            <li><a href={'https://qiita.com/muiscript/items/7b6097edfcdb30fc6ae8'}>野球選手が本塁打を一番打てるのは何歳のときなのかPythonとStanで求める</a></li>
        </ul>
        <h4>linux commands</h4>
        <ul>
            <li><a href={'https://qiita.com/muiscript/items/02ddff566231bdb04a75'}>テキスト処理にたまに便利なAWK入門</a></li>
            <li><a href={'https://qiita.com/muiscript/items/956ac41c4cf6cf85ae12'}>sarコマンドの使い方</a></li>
        </ul>
        <h4>others</h4>
        <ul>
            <li><a href={'https://qiita.com/muiscript/items/9956bdc3464b7520e04a'}>javascript ではなぜ 2^53 - 1 以下の整数を正確に表せるのか</a></li>
        </ul>
    </Layout>
);

export default Index;
