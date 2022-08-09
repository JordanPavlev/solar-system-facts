import jupiterImage from '../assets/images/planet-jupiter.svg';
import jupiterInternalImage from '../assets/images/planet-jupiter-internal.svg';
import jupiterGeoImage from '../assets/images/planet-jupiter-geology.png';

import PlanetSection from '../components/PlanetSection/PlanetSection';

const data = {
        name: 'Jupiter♃',
    overview: {
        content:
            'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.Jupiter is primarily composed of hydrogen, but helium constitutes one-quarter of its mass and one-tenth of its volume. It probably has a rocky core of heavier elements,[16] but, like the other giant planets in the Solar System, it lacks a well-defined solid surface.',
        source: 'https://en.wikipedia.org/wiki/Jupiter',
        image: jupiterImage,
    },
    structure: {
        content:
            "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.Jupiter is surrounded by a faint planetary ring system and a powerful magnetosphere. Jupiter's magnetic tail is nearly 800 million km (5.3 AU; 500 million mi) long.",
        source: 'https://en.wikipedia.org/wiki/Jupiter#Internal_structure',
        image: jupiterInternalImage,
    },
    geology: {
        content:
            'Pioneer 10 was the first spacecraft to visit Jupiter, making its closest approach to the planet in December 1973. Jupiter has since been explored by multiple robotic spacecraft, beginning with the Pioneer and Voyager flyby missions from 1973 to 1979, and later with the Galileo orbiter in 1995. Bending its trajectory en route to Pluto. The latest probe to visit the planet, Juno, entered orbit around Jupiter in July 2016. Future targets for exploration in the Jupiter system include the probable ice-covered liquid ocean of Europa. ',
        source: 'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices',
        image: jupiterImage,
        geo: jupiterGeoImage,
    },
    sectionColor: 'hsl(2, 68%, 53%)',
    desktopImgWidth: '582px',
    tabletImgWidth: '369px',
    mobileImgWidth: '224px',
    rotation: '10 Hours',
    revolution: '12 Years',
    radius: '69,911 KM',
    temperature: '-108°c',
}

const Jupiter = () => {
    return <PlanetSection planetData={data} />
}

export default Jupiter; 