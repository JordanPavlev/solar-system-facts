import { useState } from "react";

const useToggleMenu = () => {
    const [isActive, setIsActive] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTransitionend, setIsTransitionend] = useState(true);
    let tabletBreakpoint = 768;



    //showMenu or closeMenu depending on isActive state
    const handleToggle = () => {
        if (!isTransitionend) return false;
        !isActive ? showMenu() : closeMenu();
    }

    const showMenu = () => {
        setIsActive(true);
        setIsTransitionend(false);
        setIsExpanded(true);

        setTimeout(() => {
            setIsTransitionend(true)
        }, 1000);
    }

    const closeMenu = () => {
        setIsTransitionend(false);
        setIsActive(false);
        setIsExpanded(false);

        setTimeout(() => {
            setIsTransitionend(false)
        }, 1000);
    }

    const runDefault = () => {
        setIsActive(false);
        setIsExpanded(false);
        setIsTransitionend(true);
    }

    return [
        handleToggle,
        runDefault,
        isActive,
        isExpanded,
        tabletBreakpoint,
    ]
}

export default useToggleMenu;