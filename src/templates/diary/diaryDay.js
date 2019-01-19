import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Head from '../../components/head';

export default ({ data }) => (
    <React.Fragment>
        <Head
            title={`${data.contentfulDiary.date} | ${data.site.siteMetadata.title}`}
            description={data.contentfulDiary.content.content}
            pageUrl={`${data.site.siteMetadata.siteUrl}/diary/${data.contentfulDiary.date}`}
            imageUrl={data.contentfulAsset.file.url}
        />
        <Layout>
            <h4>{data.contentfulDiary.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: data.contentfulDiary.content.childMarkdownRemark.html}}/>
        </Layout>
    </React.Fragment>
);

export const query = graphql`
  query($date: String!) {
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
    contentfulDiary(date: { eq: $date }) {
      date(formatString: "YYYYMMDD")
      content {
        content
        childMarkdownRemark {
          html
        }
      }
    }
  } 
`;
