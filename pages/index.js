import { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import  Provider  from "@components/Provider";

import Wrapper from '@components/Wrapper'

import Navbar from '@components/Navbar'

import Animation from "@components/Animations"

import Mercury from './Mercury'
import Venus from "./Venus";
import Earth from "./earth";
import Neptune from "./Neptune";
import Saturn from "./Saturn";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Uranus from "./Uranus"


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