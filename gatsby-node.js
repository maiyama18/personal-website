const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
      query {
        allContentfulDiary {
          edges {
            node {
              date
              contentful_id
            }
          }
        }
      }
    `);

    result.data.allContentfulDiary.edges.forEach(({ node }) => {
        const { date } = node;
        const formattedDate = date.replace(/-/g, '');
        createPage({
            path: `/diary/${formattedDate}`,
            component: path.resolve('./src/templates/day.js'),
            context: {
                date,
            }
        })
    })
};
