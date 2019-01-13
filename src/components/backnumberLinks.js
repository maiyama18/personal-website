import React from 'react';
import { Link } from 'gatsby';
import { Grid } from 'semantic-ui-react';

export default ({ monthsByYears }) => (
    <Grid style={{ marginTop: '1.5rem' }}>
        {Object.entries(monthsByYears).map(([year, months]) => (
            <React.Fragment key={year}>
                <Grid.Row style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Grid.Column>
                        {year}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={12} style={{ paddingTop: '0.1rem', paddingBottom: '0.5rem' }}>
                    {months.map(month => (
                        <Grid.Column key={month}>
                            <Link to={`/diary/month/${year}${month}`}>{month}</Link>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </React.Fragment>
        ))}
    </Grid>
);

