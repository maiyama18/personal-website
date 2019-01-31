import React from 'react';
import { graphql } from 'gatsby';
// import { Card, Image, Label } from 'semantic-ui-react';
import Layout from '../components/layout';
import Head from '../components/head';

export default ({ data }) => (
    <React.Fragment>
        <Head
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.description}
            pageUrl={data.site.siteMetadata.siteUrl}
            imageUrl={`https:${data.contentfulAsset.file.url}`}
        />
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

            <h2>Codes</h2>
            <ul>
                <li>
                    <a href={'https://github.com/muiscript/ether'}>ether</a>:
                        an original scripting language implemented from scratch
                </li>
                <li>
                    <a href={'https://github.com/muiscript/rb-monkey'}>rb-monkey</a>:
                        Ruby implementation of <a href={'https://interpreterbook.com/'}>Monkey programming language</a>
                </li>
                <li>
                    <a href={'https://github.com/muiscript/cli-2048-java'}>cli-2048-java</a>:
                        command line <a href={'https://play2048.co/'}>2048</a> written in Java
                </li>
            </ul>

            <h2>Websites</h2>
            <div>
                {data.allContentfulWebsite.edges.map(({ node }) => (
                    <div key={node.id} style={{ marginBottom: '2rem', clear: 'left' }}>
                        <div style={{ float: 'left' }}>
                            <img src={node.image.file.url} style={{ width: '160px', height: '120px', border: '1px grey solid', marginRight: '0.6rem' }}/>
                        </div>
                        <div>
                            <h3>
                                <a href={node.url} style={{ textDecoration: 'none' }}>{node.name}</a>
                            </h3>
                            <p>{node.description}</p>
                            <p style={{ fontFamily: 'Source Code Pro' }}>{node.since}</p>
                            <p>
                                {node.technologies.map(({ content }) => (
                                    <span
                                        key={content}
                                        style={{
                                            background: '#a0a0a0',
                                            color: 'white',
                                            fontFamily: 'Source Code Pro',
                                            fontSize: '0.8rem',
                                            borderRadius: '0.3rem',
                                            padding: '0.3rem',
                                            marginRight: '0.3rem',
                                        }}
                                    >{content}</span>
                                ))}
                            </p>
                        </div>

                        <div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 style={{ paddingTop: '1.5rem', clear: 'left' }}>Writings</h2>
            <h4>react.js/redux.js</h4>
            <ul>
                <li><a
                    href={'https://qiita.com/muiscript/items/b4ca1773580317e7112e'}>react-router@v4を使ってみよう：シンプルなtutorial</a>
                </li>
                <li><a
                    href={'https://qiita.com/muiscript/items/573247b12ff0bc4e5d3c'}>React+Redux+Express+MongoDBでものすごくシンプルなCRUDアプリをつくる</a>
                </li>
                <li><a
                    href={'https://qiita.com/muiscript/items/63386fd65c7e9f06f5d4'}>reduxで非同期処理をするいくつかの方法（redux-thunk、redux-saga）</a>
                </li>
                <li><a
                    href={'https://qiita.com/muiscript/items/1882afaffd1163e953c4'}>typescriptでreact/reduxアプリを作るときにどこに何をどのように書けばいい感じになるか（の一例）</a>
                </li>
            </ul>
            <h4>statistics</h4>
            <ul>
                <li><a
                    href={'https://qiita.com/muiscript/items/7b6097edfcdb30fc6ae8'}>野球選手が本塁打を一番打てるのは何歳のときなのかPythonとStanで求める</a>
                </li>
            </ul>
            <h4>linux commands</h4>
            <ul>
                <li><a href={'https://qiita.com/muiscript/items/02ddff566231bdb04a75'}>テキスト処理にたまに便利なAWK入門</a></li>
                <li><a href={'https://qiita.com/muiscript/items/956ac41c4cf6cf85ae12'}>sarコマンドの使い方</a></li>
            </ul>
            <h4>others</h4>
            <ul>
                <li><a href={'https://qiita.com/muiscript/items/9956bdc3464b7520e04a'}>javascript ではなぜ 2^53 - 1以下の整数を正確に表せるのか</a></li>
            </ul>
        </Layout>
    </React.Fragment>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    } 
    contentfulAsset(file: { fileName: { eq: "icon.png" } }) {
      file {
        url
      }
    }
    allContentfulWebsite(sort: { fields: [confidence], order: DESC }) {
      edges {
        node {
          id
          name
          url
          description
          technologies {
            content
          }
          since(formatString: "YYYY/MM-")
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
