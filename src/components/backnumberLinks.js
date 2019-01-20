import React from 'react';
import { Link } from 'gatsby';

export default ({ monthsByYears }) => (
    <div style={{ marginTop: '1.5rem', fontFamily: 'Source Code Pro' }}>
        {Object.entries(monthsByYears).map(([year, months]) => (
            <React.Fragment key={year}>
                <h3 style={{ fontFamily: 'Source Code Pro', margin: 0 }}>{year}</h3>
                <div style={{ paddingTop: '0.1rem', paddingBottom: '0.5rem' }}>
                    {months.map(month => (
                        <span key={month} style={{ marginRight: '0.2rem' }}>
                            <Link to={`/diary/month/${year}${month}`}>{month}</Link>
                        </span>
                    ))}
                </div>
            </React.Fragment>
        ))}
    </div>
);

