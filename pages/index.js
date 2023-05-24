import { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from 'framer-motion'
import  Provider  from "../components/Provider/Provider";
import Wrapper from '../components/Wrapper/Wrapper'
import Navbar from '../components/Navbar/Navbar'
import Animation from "../components/Animation/Animation"
import Mercury from './mercury'
import Venus from "./venus";
import Earth from "./earth";
import Neptune from "./neptune";
import Saturn from "./saturn";
import Mars from "./mars";
import Jupiter from "./jupiter";
import Uranus from "./uranus"
import Link from "next/link";


export default function App () {

  const location = useRouter();
  const [activePlanet, setActivePlanet] = useState('/');
  return (
    <Provider>
      <Wrapper>
      <Navbar
           pathName={location.pathname}
           onHover={setActivePlanet}
           activePlanet={activePlanet}
         />
      </Wrapper>
    </Provider>
  )
  // const location = useRouter();
  // const [activePlanet, setActivePlanet] = useState('/');
  //   return (
       
  //     <Provider>
  //       <Wrapper>
  //         <Navbar
  //           pathName={location.pathname}
  //           onHover={setActivePlanet}
  //           activePlanet={activePlanet}
  //         />
  //           <AnimatePresence>
            
                   
  //                       <Link  href="/earth" />
                            
                        
  //                       <Link   href="/earth"/>
                            
  //                       <Link   href="/earth" />
                            
  //                       <Link   href="/earth" />
                            
  //                       <Link href="/earth" />
                           
  //                       <Link  href="/earth"/>
                            
  //                       <Link href="/earth"/>
                            
  //                       <Link  href="/earth" />
                            
  //                       <Link href="/earth" />
   
                   
  //           </AnimatePresence>
  //       </Wrapper>
  //     </Provider>
      
  //   )
}