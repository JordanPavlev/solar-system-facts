import { Info } from "./InfoStyles";
import { Item } from "./InfoStyles";
import { Heading } from "./InfoStyles";
import { Description } from "./InfoStyles";

const InfoContainer = ({ planetData }) => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 25,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.5, duration: 1.5 },
        },
        exit: {
            opacity: 0,
            y: 25,
            transition: { duration: 1 },
        },
    }

    return (
        <Info
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit" >

                <Item>
                    <Heading>Rotation Time</Heading>
                    <Description>{planetData.rotation}</Description>
                </Item>

                <Item>
                    <Heading>Revolution Time</Heading>
                    <Description>{planetData.revolution}</Description>
                </Item>

                <Item>
                    <Heading>Radius</Heading>
                    <Description>{planetData.radius}</Description>
                </Item>

                <Item>
                    <Heading>Average temp.</Heading>
                    <Description>{planetData.temperature}</Description>
                </Item>

        </Info>
    );
};

export default InfoContainer;