import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ title, description, pageUrl, imageUrl }) => (
    <Helmet
        title={title}
        meta={[
            { name: 'description', content: description.slice(0, 120) + '...' },
            { name: 'og:title', content: title },
            { name: 'og:type', content: 'blog' },
            { name: 'og:url', content: pageUrl },
            { name: 'og:image', content: imageUrl },
            { name: 'og:description', content: description.slice(0, 120) + '...' },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@muiscript' },
        ]}
        link={[
            { rel: 'icon', 'type': 'image/png', href: imageUrl }
        ]}
    />
)
