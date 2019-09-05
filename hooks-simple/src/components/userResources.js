import { useState, useEffect } from 'react';
import Axios from 'axios';

const axios = Axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' });

const useResources = (resource) => {
    const [resources, setResources] = useState([]);
    
    const fetchResource = async (resource) => {
        const response = await axios.get(resource);
        setResources(response.data);
    }

    useEffect( () => {
        fetchResource(resource)
    }, [resource]);

    return resources;
}

export default useResources;