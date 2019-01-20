import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
                <div className={'container'}>
                    <Header title={title} iconUrl={iconUrl}/>
                    <div>
                        {children}
                    </div>
                </div>
            );
        }}
    />
);
