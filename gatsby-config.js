const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

const siteTitle = 'muiscript';
const diaryTitle = 'unrelieved';
const blogTitle = 'unresolved';

const siteUrl = "https://muiscript.tokyo";

module.exports = {
    siteMetadata: {
        title: siteTitle,
        description: 'cv / diary / blog',
        siteUrl,
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
                        title: diaryTitle,
                        output: '/diary/rss.xml',
                        serialize: ({ query: { site, allContentfulDiary } }) => {
                            return allContentfulDiary.edges.map(({ node }) => {
                                const formattedDate = node.date.replace(/-/g, '');
                                return {
                                    url: `${siteUrl}/diary/${formattedDate}`,
                                    guid: `${siteUrl}/diary/${formattedDate}`,
                                    date: node.date,
                                    title: formattedDate,
                                    description: node.content.childMarkdownRemark.html,
                                }
                            })
                        },
                        query: `{
                          allContentfulDiary(
                            limit: 1000,
                            sort: { fields: [date], order: DESC },
                          ) {
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
                        }
                        `,
                    },
                    {
                        title: blogTitle,
                        output: '/blog/rss.xml',
                        serialize: ({ query: { site, allContentfulBlog } }) => {
                            return allContentfulBlog.edges.map(({ node }) => {
                                return {
                                    url: `${siteUrl}/blog/${node.id}`,
                                    guid: `${siteUrl}/blog/${node.id}`,
                                    date: node.postedAt,
                                    title: node.title,
                                    description: node.body.childMarkdownRemark.html,
                                }
                            })
                        },
                        query: `{
                          allContentfulBlog(
                           limit: 1000,
                           sort: { fields: [postedAt], order: DESC }
                          ) {
                            edges {
                              node {
                                id
                                title
                                postedAt
                                body {
                                  childMarkdownRemark {
                                    html
                                  }
                                }
                              }
                            }
                          }
                        }
                        `,
                    },
                ]
            }
        },
    ]
};
