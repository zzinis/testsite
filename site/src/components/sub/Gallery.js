import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from '../common/Layout';

function Gallery() {
    const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
    const key = '';
    const method_interest = 'flickr.interestingness.getList';
    const num = 20;
    const url = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;

    const [Items, setItems] = useState([]);

    useEffect(() => {
        axios.get(url).then((json) => {
            console.log(json.data.photos.photo);
            setItems(json.data.photos.photo);
        });
    }, []);

    return <Layout name={'Gallery'}>Gallery</Layout>;
}

export default Gallery
