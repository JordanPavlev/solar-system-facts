import marsImage from '@public/planet-mars.svg';
import marsInternalImage from '@public/planet-mars-internal.svg';
import marsGeoImage from '@public/planet-mars-geology.png';

import PlanetSection from '../components/PlanetSection/PlanetSection';

const data = {

    name: 'Mars♂',
    overview: {
        content:
            'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".Mars is a terrestrial planet with a thin atmosphere, and has a crust primarily composed of elements similar to Earths crust, as well as a core made of iron and nickel.',
        source: 'https://en.wikipedia.org/wiki/Mars',
        image: marsImage,
    },
    structure: {
        content:
            'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
        source: 'https://en.wikipedia.org/wiki/Mars#Internal_structure',
        image: marsInternalImage,
    },
    geology: {
        content:
            'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
        source: 'https://en.wikipedia.org/wiki/Mars#Surface_geology',
        image: marsImage,
        geo: marsGeoImage,
    },
    sectionColor: 'hsl(10, 63%, 51%)',
    desktopImgWidth: '336px',
    tabletImgWidth: '213px',
    mobileImgWidth: '129px',
    rotation: '1.03 Days',
    revolution: '1.88 Years',
    radius: '3,389.5 KM',
    temperature: '-28°c',
}

const Mars = () => {
    return <PlanetSection planetData={data} />
}

export default Mars;