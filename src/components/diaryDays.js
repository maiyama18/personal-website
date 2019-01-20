import React from 'react';

export default ({ edges }) => (
    <div>
        {edges.map(({ node }) => (
            <div key={node.id} style={{ marginBottom: '3rem' }}>
                <h2>
                    <a href={`/diary/${node.date}`} style={{ fontFamily: 'Source Code Pro', textDecoration: 'none', marginBottom: '0' }}>
                        {node.date}
                    </a>
                </h2>
                <div className={'diary-post'} dangerouslySetInnerHTML={{ __html: node.content.childMarkdownRemark.html }}/>
            </div>
        ))}
    </div>
);

