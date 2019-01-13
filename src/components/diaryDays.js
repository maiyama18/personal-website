import React from 'react';

export default ({ edges }) => (
    <div>
        {edges.map(({ node }) => (
            <div key={node.id} style={{ marginBottom: '2.5rem' }}>
                <h3>
                    <a href={`/diary/${node.date}`} style={{ fontFamily: 'Source Code Pro' }}>
                        {node.date}
                    </a>
                </h3>
                <div dangerouslySetInnerHTML={{ __html: node.content.childMarkdownRemark.html }}/>
            </div>
        ))}
    </div>
);

