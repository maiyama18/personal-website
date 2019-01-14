import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';

export default ({ data }) => (
    <Layout>
        <h4>{data.contentfulDiary.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: data.contentfulDiary.content.childMarkdownRemark.html}}/>
    </Layout>
);

export const query = graphql`
  query($date: String!) {
    contentfulDiary(date: { eq: $date }) {
      date(formatString: "YYYYMMDD")
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  } 
`;
