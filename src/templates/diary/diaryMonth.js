import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import BacknumberLinks from '../../components/backnumberLinks';
import DiaryDays from '../../components/diaryDays';
import Head from '../../components/head';

export default ({ data, pageContext }) => (
    <React.Fragment>
        <Head
            title={`${pageContext.monthStr} | ${data.site.siteMetadata.title}`}
            description={data.site.siteMetadata.description}
            pageUrl={`${data.site.siteMetadata.siteUrl}/diary/${pageContext.monthStr}`}
            imageUrl={data.contentfulAsset.file.url}
        />
        <Layout>
            <DiaryDays edges={data.allContentfulDiary.edges}/>

            {pageContext.prevPath ?
                <Link to={pageContext.prevPath}><h4 style={{ display: 'inline' }}>{'<-prev month'}</h4></Link> : null}
            {pageContext.prevPath && pageContext.nextPath ? <h4 style={{ display: 'inline' }}>{' / '}</h4> : null}
            {pageContext.nextPath ?
                <Link to={pageContext.nextPath}><h4 style={{ display: 'inline' }}>{'next month->'}</h4></Link> : null}

            <BacknumberLinks monthsByYears={pageContext.monthsByYears}/>
        </Layout>
    </React.Fragment>
);

export const query = graphql`
  query($dateGlob: String!) {
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
	  filter: { date: { glob: $dateGlob } },
      sort: { fields: [date], order: ASC },
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
