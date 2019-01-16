const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

module.exports = {
    siteMetadata: {
        title: 'my website',
        description: 'my profile and diary',
        siteUrl: 'https://muiscript.netlify.com',
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: CONTENTFUL_SPACE_ID,
                accessToken: CONTENTFUL_ACCESS_TOKEN,
            }
        },
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'M PLUS Rounded 1c\:light,regular',
                    'Source Code Pro\:light',
                    'Satisfy'
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-feed',
            options: {
                feeds: [
                    {
                        title: 'title',
                        output: '/rss.xml',
                        serialize: ({ query: { site, allContentfulDiary } }) => {
                            return allContentfulDiary.edges.map(({ node }) => {
                                return {
                                    url: `${site.siteMetadata.siteUrl}/diary/${node.date}`,
                                }
                            })
                        },
                        query: `{
                      allContentfulDiary {
                        edges {
                          node {
                            date
                            content {
                              childMarkdownRemark {
                                html
                              }
                            }
                          }
                        }
                      }
                    }`,
                    }
                ]
            }
        },
    ]
};
