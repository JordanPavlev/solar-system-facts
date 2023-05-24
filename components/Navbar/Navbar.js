import { useEffect, useState } from "react";

import { Header, Title, NavbarContainer, TitleLink } from "./NavbarStyles";

import NavMobile from "./NavbarMobile/NavbarMobile";

import NavDesktop from "./NavbarDesktop/NavbarDesktop";





const Navbar = ({ pathName, activePlanet, onHover }) => {
    //same as the section
    const[windowWidth, setWindowWidth] = useState(768);
    const tabletBreakpoint = 768;

    useEffect( () => {
        window.addEventListener('resize', () => {
            setWindowWidth(768)
        })
    }, [windowWidth])

    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: 
            { delay: 1.5, duration: 4 },
        },
        exit: {
            opacity: 0,
            transition: 
            { duration: 1 },
        },
    }

    return(
        <Header
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >

            <NavbarContainer>
                <Title><TitleLink href="/">Solar System🛸</TitleLink></Title>
                
                {windowWidth >= tabletBreakpoint ? (
                    <NavDesktop
                    pathName={pathName}
                    onHover={onHover}
                    activePlanet={activePlanet}
                />
                ) : (
                    <NavMobile windowWidth={windowWidth} />
                )} 
            </NavbarContainer>
        </Header>
    )

}

export default Navbar;