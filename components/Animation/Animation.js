import { AnimationContainer } from "./AnimationStyles";
import { SunAnimation } from "./AnimationStyles";
import { RingsAsteroids } from "./AnimationStyles";
import AnimationsRouter from "./AnimationRouter";

import { titles } from "./titles";
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