import styled from "styled-components";
import { css } from "styled-components";
import { NavLink } from "react-router-dom";


export const Nav = styled.nav`
    height: 100%;
`

export const List = styled.ul`
    display: flex;
    flex-flow: row;
    gap: 32px;
    width: 100%;
    margin-top: 39px;

    @media (min-width: 1025px) {
        margin-top: 0;
        height: 100%;
    }
`

export const Item = styled.li``

export const Link = styled(NavLink)`
    display: flex;
    position: relative;
    font-size: 0.9875rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.whiteAlpha75};
    cursor: pointer;
    transition: color 300ms ease;
    
    &:hover {
        color: ${(props) => props.$bgcolor};
    }

    @media (min-width: 768px) {
        &:focus {
            outline: none;
        }

        &:focus-visible {
            outline: 2px dashed ${(props) => props.theme.colors.redLight};
            outline-offset: 3px;
            color: ${(props) => props.theme.colors.white};
        }

        ${(props) =>
            props.$isActive
                ? css`
                    color: ${(props) => props.theme.colors.white};
                `
                : ''}
    }

    @media (min-width: 1025px) {
        height: 100%;
        align-items: center;
        margin-top: 5px;
        &::after {
            position: absolute;
            content: '';
            left: 0;
            bottom: 5px;
            width: 100%;
            border-radius: 10px;
            height: 8px;
            background-color: ${(props) => props.$bgcolor};
            transform: scaleX(0);
            transition: transform 350ms ease;
        }

        &:hover {
            &::after {
                color: ${(props) => props.$bgcolor};
                transform: scaleX(1.4);
            }
        }

        &:focus {
            outline: none;
            color: ${(props) => props.$bgcolor};
        }

        &:focus-visible {
            color: ${(props) => props.theme.colors.white};
            &::after {
                transform: scaleX(1);
            }
        }

        ${(props) =>
            props.$isActive
                ? css`
                    &::after {
                        transform: scaleX(2.4);
                    }
                `
                : ''}
    }
`