import { useState } from "react";
import { Switch, Route, useLocation } from 'react-router-dom'
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
            <Switch location={location} key={location.key}>
                        <Route exact path="/mercury">
                            <Mercury />
                        </Route>
                        <Route exact path="/venus">
                            <Venus />
                        </Route>
                        <Route exact path="/earth">
                            <Earth />
                        </Route>
                        <Route exact path="/mars">
                            <Mars />
                        </Route>
                        <Route exact path="/jupiter">
                            <Jupiter />
                        </Route>
                        <Route exact path="/saturn">
                            <Saturn />
                        </Route>
                        <Route exact path="/uranus">
                            <Uranus />
                        </Route>
                        <Route exact path="/neptune">
                            <Neptune />
                        </Route>
                        <Route exact path="/">
                            <Animation activePlanet={activePlanet} />
                        </Route>
                    </Switch>
            </AnimatePresence>
        </Wrapper>
      </Provider>
    )
}

export default App;