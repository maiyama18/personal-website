import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import './post.css';

export default ({ data }) => (
    <Layout>
        <h4 style={{ fontFamily: 'Source Code Pro', color: 'darkorange' }}>{data.contentfulBlog.postedAt}</h4>
        <h1>{data.contentfulBlog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.contentfulBlog.body.childMarkdownRemark.html}}/>
    </Layout>
);

export const query = graphql`
  query($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      postedAt(formatString: "YYYY-MM-DD HH:mm")
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  } 
`;
