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
        'gatsby-transformer-remark'
    ]
};
