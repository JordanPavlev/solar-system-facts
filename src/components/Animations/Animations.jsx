import { AnimationContainer } from "./AnimationsStyles";
import { SunAnimation } from "./AnimationsStyles";
import { RingsAsteroids } from "./AnimationsStyles";
import AnimationsRouter from "./AnimationsRouter";

import { titles } from "./titles";
// eslint-disable-next-line react/prop-types
const Animations = ({ activePlanet }) => {

    const variants = {
        hidden: {
            opacity: 0,
            scale: 6,
            rotate: '-40deg',
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { delay: 1, duration: 3 },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            rotate: '-10deg',
            transition: { duration: 1 },
        },
    }

        return (
            <AnimationContainer
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <SunAnimation />
                    {titles.map ((title) => (
                        <AnimationsRouter
                            data={title}
                            key={title.id}
                            activePlanet={activePlanet}
                        />
                    ) )}
                    <RingsAsteroids />
            </AnimationContainer>
        )
}

export default Animations;