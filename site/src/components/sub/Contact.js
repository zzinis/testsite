import React from 'react'
import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
function Contact() {
    const [Traffic, setTraffic] = useState(false);
    const [Location, setLocation] = useState(null);
    const container = useRef(null);
    const { kakao } = window;
    const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
    };
    useEffect(() => {
        const mapInstance = new kakao.maps.Map(container.current, option);
        const imgSrc = `${process.env.PUBLIC_URL}/img/marker1.png`;
        const imgSize = new kakao.maps.Size(232, 99);
        const imgPos = { offset: new kakao.maps.Point(116, 99) };
        const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
        const marker = new kakao.maps.Marker({
            position: option.center,
            image: markerImage,
        });
        setLocation(mapInstance);
    }, []);
    useEffect(() => {
        Traffic ? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) : Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    }, [Traffic]);

    return (
        <Layout name={'Contact'}>
            <div id='map' ref={container}></div>
            <button onClick={() => setTraffic(!Traffic)}>{Traffic ? 'Traffic ON' : 'Traffic OFF'}</button>
        </Layout>
    );
}

export default Contact
