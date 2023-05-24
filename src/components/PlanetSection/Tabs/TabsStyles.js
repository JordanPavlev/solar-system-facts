import styled from "styled-components";
import { css } from "styled-components";
import { motion } from 'framer-motion';

export const Tabs = styled(motion.div)`
    border-bottom: 1px solid ${(props) => props.theme.colors.grayDark};
    display: flex;
    justify-content: space-around;
    padding: 12px 42px;
    margin-top: 0px;
    margin-bottom: 20px;


    @media (min-width: 480px) {
        justify-content: space-evenly;
    }

    @media (min-width: 768px) {
        grid-area: tabs;
        flex-flow: column;
        gap: 16px;
        border-bottom: unset;
        padding: 0;
        width: 100%;
        max-width: 281px;
        align-self: center;
        justify-self: end;
    }

    @media (min-width: 1025px) {
        max-width: unset;
        align-self: start;
    }
`

export const Tab = styled.button`
    position: relative;
    display: block;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 0.7625rem;
    letter-spacing: 0.12rem;
    text-transform: uppercase;
    border: 4px inset ${(props) => props.theme.colors.grayDark};
    background-color: rgb(247, 252, 250, .1);   
    
    padding: 20px 5px;
    color: ${(props) => props.theme.colors.grayLight};
    transition: color 350ms ease;

    &::before {
        position: absolute;
        content: '';
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: ${(props) => props.planetData.sectionColor};
        transform-origin: center;
        transform: scaleX(0);
        transition: transform 350ms ease;
    }
    
    ${(props) =>
        props.isActive
            ? css`
                color: ${props.theme.colors.white};
                &::before {
                    transform: scaleX(1);
                }
            `
            : ''};

    @media (min-width: 768px) {
        padding: 15px 5px 15px 50px;
        border: 4px inset ${(props) => props.theme.colors.grayDark};
        border-radius: 15px;
        transition: background-color 300ms ease;
        cursor: pointer;
        color: ${(props) => props.theme.colors.white};
        &::before {
            content: unset;
        }

        &::after {
            position: absolute;
            top: 50%;
            left: 20px;
            content: '0' counter(tab);
            counter-increment: tab;
            width: 10px;
            height: 10px;
            transform: translateY(-60%);
            font-family: ${(props) => props.theme.fonts.primary};
            font-size: 0.5625rem;
            font-weight: 600;
            letter-spacing: 0.12rem;
            color: ${(props) => props.theme.colors.whiteAlpha50};
        }

        &:hover {
            background-color: ${(props) => props.theme.colors.grayDark};
        }

        &:focus {
            outline: none;
        }

        &:focus-visible {
            outline: 2px dashed ${(props) => props.planetData.sectionColor};
            outline-offset: 2px;
        }

        ${(props) =>
            props.isActive
                ? css`
                    background-color: ${(props) =>
                        props.planetData.sectionColor};
                `
                : ''};
    }

    @media (min-width: 1025px) {
        font-size: 1rem;
        letter-spacing: 0.16rem;
        line-height: 25px;
        padding: 11px 5px 10px 24px;
        &::after {
            left: 18px;
            transform: translateY(-120%);
            font-size: 0.75rem;
            letter-spacing: 0.16rem;
        }
    }
`