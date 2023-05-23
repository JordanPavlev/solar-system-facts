import earthImage from '@/public/planet-earth.svg';
import earthInternalImage from '@/public/planet-earth-internal.svg';
import earthGeoImage from '@/public/planet-earth-geology.png';

import PlanetSection from "@/components/PlanetSection/PlanetSection"

const data = {
    name: 'Earth⊕',
    overview: {
        content:
            "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water.  About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands.",
        source: 'https://en.wikipedia.org/wiki/Earth',
        image: earthImage,
    },
    structure: {
        content:
            "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. Earth is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest and most massive. Earth is about eight light minutes away from the Sun and orbits it, taking a year (about 365.25 days) to complete one revolution.",
        source: 'https://en.wikipedia.org/wiki/Earth#Internal_structure',
        image: earthInternalImage,
    },
    geology: {
        content:
            'Earth formed over 4.5 billion years ago. During the first billion years of Earths history, the ocean formed and then life developed within it. Life spread globally and began to affect Earths atmosphere and surface, leading to Earths Great Oxidation Event two billion years ago. Humans emerged 300,000 years agoand have reached a population of almost 8 billion today.',
        source: 'https://en.wikipedia.org/wiki/Earth#Surface',
        image: earthImage,
        geo: earthGeoImage,
    },
    sectionColor: 'hsl(263, 67%, 51%)',
    desktopImgWidth: '450px',
    tabletImgWidth: '285px',
    mobileImgWidth: '173px',
    rotation: '0.99 Days',
    revolution: '365 Days',
    radius: '6,371 KM',
    temperature: '16°c',
}

const Earth = () => {
    return <PlanetSection planetData={data} />
    
}

export default Earth;