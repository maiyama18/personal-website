import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
            }`
        }
        render={data => {
            const { title } = data.site.siteMetadata;
            return (
                <div>
                    <Header title={title}/>
                    {children}
                </div>
            );
        }}
    />
)
;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
