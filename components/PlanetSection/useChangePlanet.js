//Custom hook for switching the current planet

import { useRef } from "react";
import { useState } from "react";

const useChangePlanet = (data) => {
    const [currentData, setCurrentData] = useState(data.overview);
    const [isChanging, setIsChanging] = useState(false);
    const [currentTab, setCurrentTab] = useState('overview');
    const prevTab = useRef('overview');
    const isTrans = useRef(true);

  // param {Event}
  // event from current users click on element

  const handleClick = (event) => {
    let currTab = event.target.dataset.type;
    if (!isTrans.current || prevTab.current === currTab) return false;

    changeContent(currTab);
  }


  const changeContent = (tab) => {
    prevTab.current = tab;
    isTrans.current = false;
    setIsChanging(true);
    setCurrentTab(tab);

    setTimeout(() => {
        isTrans.current = true;
        setIsChanging(false)
    }, 2000);


    setTimeout(() => {
        setCurrentData(data[tab])
    }, 1000);
  };

  return [handleClick, currentData, currentTab, isChanging]
}


export default useChangePlanet;
