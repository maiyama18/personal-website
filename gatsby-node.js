const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
      query {
        allContentfulDiary {
          edges {
            node {
              date
            }
          }
        }
      }
    `);

    const { edges } = result.data.allContentfulDiary;
    // create day pages
    edges.forEach(({ node }) => {
        const { date } = node;
        const formattedDate = date.replace(/-/g, '');
        createPage({
            path: `/diary/${formattedDate}`,
            component: path.resolve('./src/templates/diaryDay.js'),
            context: {
                date,
            }
        })
    });

    // create recent pages
    const daysPerPage = 3;
    const numRecentPages = Math.ceil(edges.length / daysPerPage);
    for (let i = 0; i < numRecentPages; i++) {
        const currentPath = (i === 0) ? '/diary' : `/diary/recent/${i + 1}`;
        const olderPath = (i === numRecentPages - 1) ? null : `/diary/recent/${i + 2}`;

        let newerPath;
        if (i === 0) newerPath = null;
        else if (i === 1) newerPath = 'diary';
        else newerPath = `/diary/recent/${i}`;

        createPage({
            path: currentPath,
            component: path.resolve('./src/templates/diaryDays.js'),
            context: {
                limit: daysPerPage,
                skip: i * daysPerPage,
                newerPath,
                olderPath,
            }
        })
    }
};
