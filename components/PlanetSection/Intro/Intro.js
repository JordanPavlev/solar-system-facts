import { Intro } from "./IntroStyles";
import { Title } from "./IntroStyles";
import { Paragraph } from "./IntroStyles";
import { SourceContainer } from "./IntroStyles";
import { PlanetLink } from "./IntroStyles";
import { Span } from "./IntroStyles";

import Icon from "../../Icon/Icon";

const IntroContainer = ({ planetData, currentData, isChanging }) => {
    const containerVariants = {

        hidden: {
            opacity: 0,
            x: 50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { delay: 1.5, duration: 1.5 },
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: { duration: 1 },
        },
    }

    return (
        <Intro
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Title>{planetData.name}</Title>
            <Paragraph aria-live="assertive" isChanging={isChanging}>
                {currentData.content}
            </Paragraph>
            <SourceContainer>
                <Span>Source info:</Span>
                <PlanetLink href={currentData.source} planetData={planetData}>
                    Wikipedia <Icon name="source" size={12} color="hsl(240, 6%, 54%)" />
                </PlanetLink>
            </SourceContainer>
        </Intro>
    );
}

export default IntroContainer;