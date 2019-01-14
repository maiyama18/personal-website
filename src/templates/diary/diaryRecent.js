import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import BacknumberLinks from '../../components/backnumberLinks';
import DiaryDays from '../../components/diaryDays';

export default ({ data, pageContext }) => (
    <Layout>
        <DiaryDays edges={data.allContentfulDiary.edges}/>

        {pageContext.newerPath ? <Link to={pageContext.newerPath}><h4 style={{ display: 'inline' }}>{'<-newer'}</h4></Link> : null}
        {pageContext.newerPath && pageContext.olderPath ? <h4 style={{ display: 'inline' }}>{' / '}</h4> : null}
        {pageContext.olderPath ? <Link to={pageContext.olderPath}><h4 style={{ display: 'inline' }}>{'older->'}</h4></Link> : null}

        <BacknumberLinks monthsByYears={pageContext.monthsByYears}/>
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
