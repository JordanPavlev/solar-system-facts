import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Illustration = styled(motion.div)`
    height: 100vh;
    max-height: 140%;
    padding: 0 24px;
    z-index: 5;
    margin: 0px;

    @media(max-width: 768) {
        grid-area: illustration;
        max-height: 860px;
        padding: 0;
    }

    @media(max-width: 1025px) {
        max-height: 754px;
        margin: 0px;
    }
`;

export const Image = styled.div`
    position: relative;
    background-image: url(${(props) => props.image});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    max-width: 300px;
    margin: 0 auto;
        
    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 110px;
        height: 150px;
        background-repeat: no-repeat;
        background-size: contain;
        transform: translateX(-50%);
    }
    @media (min-width: 768px) {
        max-width: ${(props) => props.tabletImgWidth};
        &::before {
            top: 55%;
            width: 163px;
            height: 200px;
        }
    }
    @media (min-width: 1025px) {
        max-width: ${(props) => props.desktopImgWidth};
        &::before {
            top: 66%;
        }
    }
    ${(props) =>
        props.geo
            ? css`
                &::before {
                    background-image: url(${props.geo});
                }
            `
            : ''};
    ${(props) =>
        props.isChanging
            ? css`
                animation: imageSwap 2000ms ease;
            `
            : ``};

            
            @keyframes imageSwap {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0);
        }
        50% {
            opacity: 0;
            transform: translateY(100px) scale(0.5) rotate(180deg);
        }
        100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0);
        }
    }
`