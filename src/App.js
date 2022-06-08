import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ClassList from './pages/ClassList/ClassList'
import ClassDetails from './pages/ClassDetails/ClassDetails'
import MonsterList from './pages/MonsterList/MonsterList'
import MonsterDetails from './pages/MonsterDetails/MonsterDetails'
import SpellSearch from './pages/SpellSearch/SpellSearch'
import SpellDetails from './pages/SpellDetails/SpellDetails'
import CreateChar from './pages/CreateChar/CreateChar'
import RaceList from './pages/RaceList/RaceList'
import RaceDetails from './pages/RaceDetails/RaceDetails'

function App() {
  const [navItems, setNavItems] = useState([
    // {url: "/", name:"Home"},
    {url: "/class-list", name: "Class List"}, 
    {url: "/race-list", name: "Race List"},
    {url: "/monster-list", name: "Scary Monsters"}, 
    {url: "/spell-search", name: "Search for Spells"},
    {url: "/create-char", name: "Create Character"},
  ])
  
  return (
    <>
      <div className='basepic'>
        <NavBar navItems={navItems} />
        <Routes>
          <Route path='/' element={ "/" } />
          <Route path='/class-list' element={<ClassList />} />
          <Route path='/class' element={<ClassDetails />} />
          <Route path='/monster-list' element={<MonsterList />} />
          <Route path='/monster' element={<MonsterDetails />} />
          <Route path='/spell-search' element={<SpellSearch />} />
          <Route path='/spell/:spellName' element={<SpellDetails />} />
          <Route path='/create-char' element={<CreateChar />} />
          <Route path='/race-list' element={<RaceList/>} />
          <Route path='/race' element={<RaceDetails/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
