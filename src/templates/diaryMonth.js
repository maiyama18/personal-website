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

        {pageContext.prevPath ? <Link to={pageContext.prevPath}>prev</Link> : null}
        {pageContext.nextPath ? <Link to={pageContext.nextPath}>next</Link> : null}
    </Layout>
);

export const query = graphql`
  query($dateGlob: String!) {
	allContentfulDiary(
	  filter: { date: { glob: $dateGlob } },
      sort: { fields: [date], order: ASC },
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
