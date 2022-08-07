import { useState } from "react";

const useToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTransitionend, setIsTransitionend] = useState(true);
    let tabletBreakpoint = 768;



    //showMenu or closeMenu depending on isOpen state
    const handleToggle = () => {
        if (!isTransitionend) return false;
        !isOpen ? showMenu() : closeMenu();
    }

    const showMenu = () => {
        setIsOpen(true);
        setIsTransitionend(false);
        setIsExpanded(true);

        setTimeout(() => {
            setIsTransitionend(true)
        }, 1000);
    }

    const closeMenu = () => {
        setIsTransitionend(false);
        setIsOpen(false);
        setIsExpanded(false);

        setTimeout(() => {
            setIsTransitionend(false)
        }, 1000);
    }

    const restoreToDefault = () => {
        setIsOpen(false);
        setIsExpanded(false);
        setIsTransitionend(true);
    }

    return [
        handleToggle,
        restoreToDefault,
        isOpen,
        isExpanded,
        tabletBreakpoint,
    ]
}

export default useToggleMenu;
