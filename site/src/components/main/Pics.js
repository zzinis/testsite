import React from 'react'
import { useFlickrQuery } from '../../hooks/useFlickerQuery';

function Pics({ Scrolled, Pos }) {
    const { data, isSuccess } = useFlickrQuery({ type: 'user', user: '' });

    const currentPos = Scrolled - Pos;
    const base = window.innerHeight / 2;
    const modified = currentPos + base;

    console.log(data);

    return (
        <section id='pics' className='myScroll'>
            <h1 style={{ transform: `translateX(${currentPos}px)` }}>FLICKR</h1>
            <article
                style={{
                    transform: `translate(-50%, -50%) rotate(${Scrolled >= Pos - base ? modified : 0}deg) scale(${Scrolled >= Pos - base ? 1 + modified / 500 : 1
                        }) `,
                }}
            ></article>
        </section>
    );
}

export default Pics
