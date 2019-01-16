import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
    <Layout>
        {data.allContentfulBlog.edges.map(({ node }) => (
            <div key={node.id} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: 'Source Code Pro', marginBottom: '0.3rem' }}>{node.postedAt}</h4>
                <h3 style={{ marginTop: '0' }}>
                    <a href={`/blog/${node.id}`}>{node.title}</a>
                </h3>
            </div>
        ))}
    </Layout>
);

export const query = graphql`
  query {
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
