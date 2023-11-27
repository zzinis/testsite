import React from 'react'
import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
function Contact() {
    const [Traffic, setTraffic] = useState(false);
    const [Location, setLocation] = useState(null);
    const container = useRef(null);
    const [Index, setIndex] = useState(0);
    console.log(Index);

    //아래 정보값들은 useEffect구문에서 인스턴스 생성할때만 필요한 정보값에 불과하므로 미리 읽히도록 useEffect바깥에 배치
    const { kakao } = window;
    const info = [
        {
            title: '삼성역 코엑스',
            latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
            imgSrc: `${process.env.PUBLIC_URL}/img/marker1.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
        },
        {
            title: '넥슨 본사',
            latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
            imgSrc: `${process.env.PUBLIC_URL}/img/marker2.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
        },
        {
            title: '서울 시청',
            latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
            imgSrc: `${process.env.PUBLIC_URL}/img/marker3.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
        },
    ];
    const option = { center: info[Index].latlng, level: 3 };
    const imgSrc = info[Index].imgSrc;
    const imgSize = info[Index].imgSize;
    const imgPos = info[Index].imgPos;
    const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
    const marker = new kakao.maps.Marker({ position: option.center, image: markerImage });
    useEffect(() => {
        const mapInstance = new kakao.maps.Map(container.current, option);
        //지도인스턴스에 타입, 줌 컨트롤 추가
        mapInstance.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
        mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);

        setLocation(mapInstance);
    }, [Index]);
    useEffect(() => {
        Traffic
            ? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
            : Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    }, [Traffic]);

    return (
        <Layout name={'Contact'}>
            <div id='map' ref={container}></div>
            <button onClick={() => setTraffic(!Traffic)}>{Traffic ? 'Traffic ON' : 'Traffic OFF'}</button>
            {/* 배열정보값을 토대로 동적으로 li지점버튼 생성하고 해당 버튼 클릭할때 순서값 State를 변경하면서 지도화면이 갱신되도록 수정 */}
            <ul className='branch'>
                {info.map((el, idx) => {
                    return (
                        <li key={idx} onClick={() => setIndex(idx)} className={idx === Index ? 'on' : ''}>
                            {el.title}
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
}

export default Contact
