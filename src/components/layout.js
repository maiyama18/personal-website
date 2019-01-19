import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import 'semantic-ui-css/semantic.min.css';
import './layout.css';
import Header from './header';

export default ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
              site {
                siteMetadata {
                  title
                }
              }
              contentfulAsset(file: { fileName: { eq: "icon.png" } }) {
                file {
                  url
                }
              }
            }`
        }
        render={data => {
            const { title } = data.site.siteMetadata;
            const iconUrl = data.contentfulAsset.file.url;
            return (
                <div>
                    <Helmet>
                        <meta charSet="utf-8"/>
                        <meta name="description" content="personal website of @muiscript"/>
                        <title>{title}</title>
                    </Helmet>
                    <Header title={title} iconUrl={iconUrl}/>
                    <Container>
                        {children}
                    </Container>
                </div>
            );
        }}
    />
);
