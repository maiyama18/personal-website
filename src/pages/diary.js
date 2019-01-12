import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';


export default ({ data }) => (
    <Layout>
        <h2>Diary</h2>
        {data.allContentfulDiary.edges.map(edge => (
            <div key={edge.node.id}>
                {edge.node.date}
                <div dangerouslySetInnerHTML={{ __html: edge.node.content.childMarkdownRemark.html}}/>
            </div>
        ))}
    </Layout>
);

export const query = graphql`
  query {
	allContentfulDiary(
      limit: 10,
      sort: { fields: [date], order: DESC }
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
