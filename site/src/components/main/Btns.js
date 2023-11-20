import { useRef, useEffect, useState } from 'react';
import Anime from '../../asset/anime';

function Btns() {
    console.log('btn Called');

    const btnRef = useRef(null);
    const pos = useRef([]);
    const [Num, setNum] = useState(0);

    const getPos = () => {
        pos.current = [];
        const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
        for (const sec of secs) pos.current.push(sec.offsetTop);
        setNum(pos.current.length);
    };
    useEffect(() => {
        getPos();
        window.addEventListener('resize', getPos);
        return () => {
            window.removeEventListener('resize', getPos);
        };
    }, []);
    return (
        <ul className='btnNavi' ref={btnRef}>
            {/* 현재 세로 위치값이 담겨있는 배열의 갯수로 빈배열 동적으로 생성하고 버튼 반복처리 */}
            {Array(Num)
                .fill()
                .map((_, idx) => {
                    let defaultClass = '';
                    if (idx === 0) defaultClass = 'on';
                    return (
                        <li
                            key={idx}
                            className={defaultClass}
                            onClick={() => {
                                new Anime(window, {
                                    prop: 'scroll',
                                    value: pos.current[idx],
                                    duration: 500,
                                });
                            }}
                        ></li>
                    );
                })}
        </ul>
    );
}
export default Btns;