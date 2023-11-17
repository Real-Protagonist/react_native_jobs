import {useState, useEffect} from 'react'
import axios from 'axios';

import {RAPID_API_KEY} from '@env';

const rapiApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require('axios');

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        'X-RapidAPI-Key': rapiApiKey,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query}
    };
}