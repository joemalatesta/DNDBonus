import React, { useState, useEffect } from 'react';
import { getRaceList } from '../../services/api-calls'
import { getClassList } from '../../services/api-calls'
import { getDetails } from '../../services/api-calls';
import { useLocation } from 'react-router-dom';
import { getClassStats } from '../../services/api-calls';

const CreateChar = () => {
  let location = useLocation()
  const [races, setRaces] = useState([])
  const [classes, setClasses] = useState([])
  const [charClass, setCharClass] = useState([])
  const [charRace, setCharRace] = useState([])
  const [classDetails, setClassDetails] = useState({})
  const [STR, setSTR] = useState('')
  const [DEX, setDEX] = useState('')
  const [CON, setCON] = useState('')
  const [INT, setINT] = useState('')
  const [WIS, setWIS] = useState('')
  const [CHA, setCHA] = useState('')
  const [currentCharClass, setCurrentCharClass] = useState('')


  useEffect(()=> {
    getClassList()
    .then(classData => setClasses(classData.results))
    getRaceList()
    .then(raceData => setRaces(raceData.results))
  }, [currentCharClass])

  
  const handleChange = (e) => {
    console.log(e.target.classes.index)
    console.log(classes);

  }


  const table = {
    3: "-4",
    4: "-3",
    5: "-3",
    6: "-2",
    7: "-2",
    8: "-1",
    9: "-1",  
    10:"+0",
    11:"+0",
    12:"+1",
    13:"+1",
    14:"+2",
    15:"+2",
    16:"+3",
    17:"+3",
    18:"+4",
  }
  
  function getRandomInt () {
    let min = Math.ceil(3);
    let max = Math.floor(18);
    return (Math.floor(Math.random() * (max - min) + min)) 
  }  
  
  const rollStat = (e) =>{
    let value = getRandomInt()
    return value
  }
  
  const rollStats = (e) =>{
    e.preventDefault()
    setSTR(rollStat())
    setDEX(rollStat())
    setCON(rollStat())
    setINT(rollStat())
    setWIS(rollStat())
    setCHA(rollStat())
  }

  
  return ( 
    <div className='charSheet'>
      <div>
        <form onSubmit={rollStats}>

          <button type="submit">Roll Stats</button>
        </form>
      </div>
      <h2>Your Character Deets</h2>
      <div className='card'>
        <h3>Class : 
          <select onChange={ () => handleChange() } name="charClass" id="charClass">
            {classes.map((char) => (
              <option value={char.name} url={char.url} key={char.index}>{char.name}</option>
              ))}
          </select>
          
    
        </h3>
        <h3>Race : 
          <select name="charRace" id="charRace">
          {races.map((race) => (
            <option value={race.name} key={race.index}>{race.name}</option>
            ))}
            </select>
        </h3>
      </div>
      <div>
        <h4 className='icon-container stats'>STR: {STR} ({table[STR]}) </h4>
        <h4 className='icon-container stats'>DEX: {DEX} ({table[DEX]})</h4>
        <h4 className='icon-container stats'>CON: {CON} ({table[CON]})</h4>
        <h4 className='icon-container stats'>INT: {INT} ({table[INT]})</h4>
        <h4 className='icon-container stats'>WIS: {WIS} ({table[WIS]})</h4>
        <h4 className='icon-container stats'>CHA: {CHA} ({table[CHA]})</h4>
      </div>  
      <div></div>
    </div>
  );
}
export default CreateChar;
