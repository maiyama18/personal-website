import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data, pageContext }) => (
    <Layout>
        {data.allContentfulDiary.edges.map(edge => (
            <div key={edge.node.id}>
                {edge.node.date}
                <div dangerouslySetInnerHTML={{ __html: edge.node.content.childMarkdownRemark.html}}/>
            </div>
        ))}

        {pageContext.newerPath ? <Link to={pageContext.newerPath}>newer</Link> : null}
        {pageContext.olderPath ? <Link to={pageContext.olderPath}>older</Link> : null}
    </Layout>
);

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
	allContentfulDiary(
      sort: { fields: [date], order: DESC },
      limit: $limit,
      skip: $skip,
    ) {
      edges {
        node {
          id
          date
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
