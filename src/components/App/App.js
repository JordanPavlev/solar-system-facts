import { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import  Provider  from "../Provider/Provider";

import Wrapper from '../Wrapper/Wrapper'

import Navbar from '../Navbar/Navbar'

import Animation from "../Animations/Animations"

import Mercury from '../../planets/Mercury'
import Venus from "../../planets/Venus";
import Earth from "../../planets/Earth";
import Neptune from "../../planets/Neptune";
import Saturn from "../../planets/Saturn";
import Mars from "../../planets/Mars";
import Jupiter from "../../planets/Jupiter";
import Uranus from "../../planets/Uranus"


const App = () => {
  
  const location = useLocation();
  const [activePlanet, setActivePlanet] = useState('/');

    return (
       
      <Provider>
        <Wrapper>
          <Navbar
            pathName={location.pathname}
            onHover={setActivePlanet}
            activePlanet={activePlanet}
          />
            <AnimatePresence>
            
                    <Routes>
                        <Route  path="/mercury" element={<Mercury />} />
                            
                        
                        <Route  path="/venus" element={<Venus />} />
                            
                        <Route  path="/earth" element={<Earth />} />
                            
                        <Route  path="/mars" element={<Mars />} />
                            
                        <Route  path="/jupiter" element={<Jupiter />} />
                           
                        <Route  path="/saturn" element={<Saturn />} />
                            
                        <Route  path="/uranus" element={<Uranus />} />
                            
                        <Route  path="/neptune" element={<Neptune />} />
                            
                        <Route  path="/" element={<Animation activePlanet={activePlanet} />} />
                            
                    </Routes>
                   
            </AnimatePresence>
        </Wrapper>
      </Provider>
      
    )
}

export default App;