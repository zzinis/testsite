import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';


const Menu = forwardRef((props, ref) => {
    const active = { color: 'aqua' };

    const [Open, setOpen] = useState(false);

    useImperativeHandle(ref, () => {
        return { toggle: () => setOpen(!Open) };
    });
    return (
        <AnimatePresence>
            {Open && (
                <motion.nav
                    id='mobilePanel'
                    initial={{ opacity: 0, x: -280 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, x: -280, transition: { duration: 0.5 } }}
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
});

export default Menu;