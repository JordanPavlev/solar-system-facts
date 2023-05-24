import styled from "styled-components";
import { css } from "styled-components";
import { motion } from "framer-motion";

export const Intro = styled(motion.div)`
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 70%;
    padding: 0 24px;
    margin-bottom: 2px;

    @media (min-width: 768px) {
        grid-area: intro;
        align-items: start;
        padding: 0;
    }

    @media (min-width: 1025px) {
        align-self: end;
        margin: 60px 0px -18px 0;
    }
`;

export const Title = styled.h1`

    color: ${props => (props.theme && props.theme.color && {color: 'white'})};;
    font-size: 1.5rem;
    font-family: ${props => (props.theme && props.theme.fonts && {fonts: 'secondary'})};;
    font-weight: 500;
    line-height: 100%;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        font-size: 3rem;
        margin-bottom: 24px;
    }

    @media (min-width: 1025px) {
        font-size: 5rem;
        margin-bottom: 34px;
    }
`;

export const Paragraph = styled.p`
    font-size: 0.9875rem;
    line-height: 22px;
    color: ${props => (props.theme && props.theme.color && {color: 'white'})};;
    text-align: center;
    margin-bottom: 10px;
    max-width: 500px;

${(props) =>
    props.isChanging
        ? css`
              animation: textSwap 2000ms ease;
          `
        : ``};

    @media (min-width: 768px) {
        text-align: left;
        margin-bottom: 32px;
        max-width: unset;
    }

    @media (min-width: 1025px) {
        font-size: 0.975rem;
        line-height: 25px;
        margin-bottom: 4px;
    }

    @keyframes textSwap {
        0% {
            opacity: 1;
            transform: scaleY(1);
        }
        50% {
            opacity: 0;
            transform: scaleY(1.2);
        }
        100% {
            opacity: 1;
            transform: scaleY(1);
        }
    }
`

export const SourceContainer = styled.span`
    display: flex;
    gap: 5px;
`

export const Span = styled.span`

    color: ${props => (props.theme && props.theme.color && {color: 'grayDark'})};;
    font-size: 0.75rem;
    line-height: 25px;

    @media (min-width: 1025px) {
        font-size: 0.875rem;
    }
`

export const PlanetLink = styled.a`

    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 25px;
    text-decoration: underline;
    color: ${props => (props.theme && props.theme.color && {color: 'greyLight'})};;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: 2px dashed ${(props) => props.planetData.sectionColor};
        outline-offset: 2px;
    }
    
    @media (min-width: 1025px) {
        font-size: 0.875rem;
        gap: 8px;
    }
`