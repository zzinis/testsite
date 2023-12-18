import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from '../common/Layout';

function Gallery() {
    const getFlickr = async (opt) => {
        const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
        const key = '';
        const method_interest = 'flickr.interestingness.getList';
        const method_user = 'flickr.people.getPhotos';
        const method_search = 'flickr.photos.search';
        const num = 20;
        let url = '';
        if (opt.type === 'interest') url = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;
        if (opt.type === 'search')
            url = `${baseURL}&api_key=${key}&method=${method_search}&per_page=${num}&tags=${opt.tags}`;
        if (opt.type === 'user')
            url = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${opt.user}`;

        const result = await axios.get(url);
        setItems(result.data.photos.photo);
    };

    useEffect(() => getFlickr({ type: 'user', user: '' }), []);

    return (
        <Layout name={'Gallery'}>
            <div className='frame'>
                {Items.map((item, idx) => {
                    return (
                        <article key={idx}>
                            <div className='inner'>
                                <div className='pic'>
                                    <img
                                        src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                                        alt={item.title}
                                    />
                                </div>
                                <h2>{item.title}</h2>
                            </div>
                        </article>
                    );
                })}
            </div>
        </Layout>
    );
}


export default Gallery
