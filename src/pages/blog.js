import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

export default ({ data }) => (
    <React.Fragment>
        <Head
            title={`${data.site.siteMetadata.title} blog`}
            description={data.site.siteMetadata.description}
            pageUrl={`${data.site.siteMetadata.siteUrl}/blog`}
            imageUrl={`https:${data.contentfulAsset.file.url}`}
        />
        <Layout>
            {data.allContentfulBlog.edges.map(({ node }) => (
                <div key={node.id} style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontFamily: 'Source Code Pro', marginBottom: '0.3rem' }}>{node.postedAt}</h4>
                    <h3 style={{ marginTop: '0' }}>
                        <a href={`/blog/${node.id}`} style={{ textDecoration: 'none' }}>{node.title}</a>
                    </h3>
                </div>
            ))}
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
	allContentfulBlog(
      sort: { fields: [postedAt], order: DESC },
    ) {
      edges {
        node {
          id
          title
          postedAt(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`;
