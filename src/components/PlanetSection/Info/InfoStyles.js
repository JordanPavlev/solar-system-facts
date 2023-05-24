import styled from "styled-components";
import { motion } from 'framer-motion';

export const Info = styled(motion.ul)`
    display: flex;
    flex-flow: column;
    gap: 8px;
    padding: 0 24px 48px 24px;
    max-width: 600px;
    margin: 0 auto;

        @media (min-width: 768px) {
            grid-area: info;
            flex-flow: row;
            justify-content: space-between;
            gap: 11px;
            padding: 0 0 36px 0;
            max-width: unset;
            margin: 0;
        }

            @media (min-width: 1025px) {
                gap: 12px;
            }
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px inset ${(props) => props.theme.colors.grayDark};
    border-radius: 19px;
    background-color: rgb(247, 252, 250, .1);
    height: 48px;
    padding: 0 24px;
    
        @media (min-width: 768px) {
            flex-flow: column;
            align-items: flex-start;
            gap: 6px;
            height: unset;
            padding: 16px 0 19px 15px;
            width: 100%;
        }

            @media (min-width: 1025px) {
                align-items: center;
                padding: 20px 20px 20px;
                gap: 8px;
            }
`;

export const Heading = styled.h4`
font-size: 0.9rem;
line-height: 16px;
letter-spacing: 0.186rem;
text-transform: uppercase;
color: ${(props) => props.theme.colors.grayLight};

    @media (min-width: 1025px) {
        font-size: 0.9875rem;
        line-height: 25px;
        letter-spacing: 0.0625rem;
    }
`;

export const Description = styled.p`
font-size: 1.25rem;
font-family: ${(props) => props.theme.fonts.secondary};
line-height: 100%;
letter-spacing: -0.047rem;
text-transform: uppercase;
color: ${(props) => props.theme.colors.white};

    @media (min-width: 768px) {
        font-size: 1.5rem;
        letter-spacing: -0.056rem;
    }

    @media (min-width: 1025px) {
        font-size: 2.2rem;
        letter-spacing: -0.09375rem;
    }
`;

