import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
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
                    <Header title={title} iconUrl={iconUrl}/>
                    <Container>
                        {children}
                    </Container>
                </div>
            );
        }}
    />
);
