// /*
//     --Redux-tookit으로 client State전역 관리하는 작업 순서--
//     {open: false} false면 메뉴제거 / true면 메뉴오픈 
//     menuSlice.js를 만들어서 위의 정보값을 초기 전역 state로 등록
//     reducer에는 해당 전역 state값을 변경해주는 함수를 등록 (close, toggle)
//     해당 함수를 원하는 컴포넌트에서 자유롭게 호출해서 전역 state변경하도록 
// */

// import { useSelector, useDispatch } from 'react-redux';
// //menuSlice로 부터 전역state값을 변경해주는 close함수를 import
// import { close } from '../../redux/menuSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { useGlobalData } from '../../hooks/useGlobalContext';


function Menu() {
    const active = { color: 'aqua' };

    const { MenuOpen, setMenuOpen } = useGlobalData();


    return (
        <AnimatePresence>
            {MenuOpen && (
                <motion.nav
                    id='mobilePanel'
                    initial={{ opacity: 0, x: -280 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, x: -280, transition: { duration: 0.5 } }}
                    onClick={() => setMenuOpen(false)}

                >
                    <h1>
                        <Link to='/'>LOGO</Link>
                    </h1>

                    <ul id='gnbMo'>
                        <li>
                            <NavLink to='/department' activeStyle={active}>
                                Department
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/community' activeStyle={active}>
                                Community
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/gallery' activeStyle={active}>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/youtube' activeStyle={active}>
                                Youtube
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' activeStyle={active}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/member' activeStyle={active}>
                                Members
                            </NavLink>
                        </li>
                    </ul>                </motion.nav>
            )}
        </AnimatePresence>
    );
}

export default Menu;