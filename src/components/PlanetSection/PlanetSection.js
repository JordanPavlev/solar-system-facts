import { useState, useEffect } from "react";
import { SectionContainer } from "./PlanetSectionStyles";
import { Section } from "./PlanetSectionStyles";
import useChangePlanet from "../../useChangePlanet"

import TabsContainer from "./Tabs/Tabs"
import IllustrationContainer from './Illustration/Illustration';
import IntroContainer from './Intro/Intro';
import InfoContainer from './Info/Info';


const PlanetSection = ({ planetData }) => {
    const [handleClick, currentData, currentTab, isChanging] = useChangePlanet(planetData);
    const[windowWidth, setWindowWidth] = useState(window.innerWidth)

    const checkWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect( () => {
        window.addEventListener('resize', checkWidth);

        return () => {
            window.removeEventListener('resize', checkWidth)
        }
    },[])

    return (
        <Section>
            <SectionContainer>
                <TabsContainer
                    planetData={planetData}
                    handleClick={handleClick}
                    currentTab={currentTab}
                    windowWidth={windowWidth}
                />
                <IllustrationContainer
                    planetData={planetData}
                    currentData={currentData}
                    isChanging={isChanging}
                />
                <IntroContainer
                    planetData={planetData}
                    currentData={currentData}
                    isChanging={isChanging}
                />
                <InfoContainer planetData={planetData}/>
            </SectionContainer>
        </Section>
    )
}

export default PlanetSection;