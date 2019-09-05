import React from 'react';
import useResources from './userResources';

const ResourceList = ({ resource }) => {
    const resources = useResources(resource);

    return (
        <ul>
            {resources.map(record => (<li>{record.title}</li>))}
        </ul>
    );
}

export default ResourceList;