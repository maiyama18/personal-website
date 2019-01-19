import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import BacknumberLinks from '../../components/backnumberLinks';
import DiaryDays from '../../components/diaryDays';
import Head from '../../components/head';

export default ({ data, pageContext }) => (
    <React.Fragment>
        <Head
            title={`${data.site.siteMetadata.title} diary`}
            description={data.site.siteMetadata.description}
            pageUrl={`${data.site.siteMetadata.siteUrl}/diary`}
            imageUrl={`https:${data.contentfulAsset.file.url}`}
        />
        <Layout>
            <DiaryDays edges={data.allContentfulDiary.edges}/>

            {pageContext.newerPath ? <Link to={pageContext.newerPath}><h4 style={{ display: 'inline' }}>{'<-newer'}</h4></Link> : null}
            {pageContext.newerPath && pageContext.olderPath ? <h4 style={{ display: 'inline' }}>{' / '}</h4> : null}
            {pageContext.olderPath ? <Link to={pageContext.olderPath}><h4 style={{ display: 'inline' }}>{'older->'}</h4></Link> : null}

            <BacknumberLinks monthsByYears={pageContext.monthsByYears}/>
        </Layout>
    </React.Fragment>
);

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
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
	allContentfulDiary(
      sort: { fields: [date], order: DESC },
      limit: $limit,
      skip: $skip,
    ) {
      edges {
        node {
          id
          date(formatString: "YYYYMMDD")
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
