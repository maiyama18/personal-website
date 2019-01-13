const path = require('path');
const moment = require('moment');

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

    // create month pages
    const monthAndYearArray = edges.map(({ node }) => {
        const m = moment(node.date);
        return {
            year: m.year().toString().padStart(4, '0'),
            month: (m.month() + 1).toString().padStart(2, '0'),
        }
    });
    const years = [...new Set(monthAndYearArray.map(my => my.year))];
    const monthAndYears = monthAndYearArray.filter((monthAndYear, i, monthAndYearArray) => (
        monthAndYearArray.findIndex(my => my.year === monthAndYear.year && my.month === monthAndYear.month) === i
    )).sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        else return a.month - b.month;
    });
    console.log(monthAndYears)
    const monthsByYears = years.reduce((hash, year) => {
        const months = monthAndYears.filter(my => my.year === year).map(my => my.month);
        return {
            ...hash,
            [year]: months,
        }
    }, {});

    for (let i = 0; i < monthAndYears.length; i++) {
        const { month, year } = monthAndYears[i];

        const dateGlob = `${year}-${month}-*`;

        const prevMonthAndYear = (i === 0) ? null : monthAndYears[i-1];
        const nextMonthAndYear = (i === monthAndYears.length - 1) ? null : monthAndYears[i+1];

        const prevPath = (prevMonthAndYear == null)
            ? null
            : `/diary/month/${prevMonthAndYear.year}${prevMonthAndYear.month}`;
        const nextPath = (nextMonthAndYear == null)
            ? null
            : `/diary/month/${nextMonthAndYear.year}${nextMonthAndYear.month}`;

        createPage({
            path: `/diary/month/${year}${month}`,
            component: path.resolve('./src/templates/diaryMonth.js'),
            context: {
                dateGlob,
                prevPath,
                nextPath,
                monthAndYears,
                monthsByYears,
            }
        })
    }

    // create day pages
    edges.forEach(({ node }) => {
        const { date } = node;
        const formattedDate = date.replace(/-/g, '');
        createPage({
            path: `/diary/${formattedDate}`,
            component: path.resolve('./src/templates/diaryDay.js'),
            context: {
                date,
                monthsByYears,
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
            component: path.resolve('./src/templates/diaryRecent.js'),
            context: {
                limit: daysPerPage,
                skip: i * daysPerPage,
                newerPath,
                olderPath,
                monthAndYears,
                monthsByYears,
            }
        })
    }
};
