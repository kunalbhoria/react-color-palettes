import React, { useState,useEffect } from "react";
import './App.css'

import { Routes, Route,useLocation } from "react-router-dom";
import colorSeeds from './seeds/palettesColors';

import Palette from "./Palette";
import PaletteList from "./PaletteList";
import AddNewPalette from "./newPalette/AddNewPalette";
import SingleColorPalette from "./SingleColorPalette";
import {CSSTransition, TransitionGroup } from "react-transition-group";


function App() {

  let Palettes = JSON.parse(window.localStorage.getItem('palettes')).length > 0 ? 
   JSON.parse(window.localStorage.getItem('palettes')) 
   :colorSeeds;

  const [palette, setPalette] = useState(Palettes);
  const saveNewPalette = (newPalette) => {
    setPalette([...palette, newPalette]);
  }
  const deletePalette=(id)=>{
    setPalette(palette.filter(palette=>palette.id != id))
  }
  useEffect(()=>{
    window.localStorage.setItem('palettes', JSON.stringify(palette))
    },[palette])

    let location = useLocation();
    console.log(location)
  return (<div>
<TransitionGroup>
  <CSSTransition key={location.key} classNames="page" timeout={500}>
      <Routes location={location}>
        <Route path="/" element={<Page ><PaletteList deletePalette={deletePalette} palettes={palette} /></Page>} />
        <Route path="/palette/new" element={<Page ><AddNewPalette palettes={colorSeeds} SaveNewPalette={saveNewPalette} /></Page>} />
        <Route path="/palette/:paletteId" element={<Page ><Palette  palettes={palette} /></Page>} />
        <Route path="/palette/:paletteId/:colorId" element={<Page ><SingleColorPalette  palettes={palette} /></Page>} />
      </Routes>
      </CSSTransition>
</TransitionGroup>
    </div>)
}

function Page(props){

  return <section className="page">{props.children}</section> ;
}

export default App ;
