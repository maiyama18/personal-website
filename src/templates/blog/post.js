import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Head from '../../components/head';

export default ({ data }) => (
    <React.Fragment>
        <Head
            title={`${data.contentfulBlog.title} | ${data.site.siteMetadata.title}`}
            description={data.contentfulBlog.body.body}
            pageUrl={`${data.site.siteMetadata.siteUrl}/blog/${data.contentfulBlog.id}`}
            imageUrl={`https:${data.contentfulAsset.file.url}`}
        />
        <Layout>
            <h4 style={{ fontFamily: 'Source Code Pro', color: 'darkorange' }}>{data.contentfulBlog.postedAt}</h4>
            <h1>{data.contentfulBlog.title}</h1>
            <div className={'blog-post'} dangerouslySetInnerHTML={{ __html: data.contentfulBlog.body.childMarkdownRemark.html}}/>
        </Layout>
    </React.Fragment>
);

export const query = graphql`
  query($id: String!) {
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
    contentfulBlog(id: { eq: $id }) {
      id
      title
      postedAt(formatString: "YYYY-MM-DD HH:mm")
      body {
        body
        childMarkdownRemark {
          html
        }
      }
    }
  } 
`;
