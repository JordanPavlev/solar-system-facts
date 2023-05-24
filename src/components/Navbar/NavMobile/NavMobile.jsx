import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Nav, Menu, Bars, List } from './NavMobileStyles';
import Items from './NavConfig';
import useToggleMenu from '../../../useToggleMenu';

const NavMobile = ({ windowWidth }) => {
    const [ handleToggle, runDefault, isActive, isExpanded, tabletBreakpoint ] = useToggleMenu();
    
    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        windowWidth >= tabletBreakpoint ? runDefault() : '';
    }, [windowWidth]);
         //Animate Presence enable animaton on component removed from the tree
         return (
            <Nav>
                <Menu
                    aria-label="Menu toggle"
                    aria-expanded={isExpanded}
                    aria-controls="nav-list"
                    onClick={handleToggle}
                > 
                    <Bars isOpen={isActive} />
                </Menu>

                <AnimatePresence>
                {isActive && (
                    <List
                    id="nav-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'linear', duration: 0.3 }}
                    exit={{ opacity: 0 }}
                    >
                        <Items runDefault={runDefault} />
                    </List>
                )}
                </AnimatePresence>
            </Nav>
         )
}

export default NavMobile;