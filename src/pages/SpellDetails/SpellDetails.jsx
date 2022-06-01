import { useState, useEffect } from 'react';
import { getSpellDetails } from '../../services/api-calls';
import { useParams } from 'react-router-dom';

const SpellDetails = (props) => {
  const [spellDetails, setSpellDetails] = useState({})
  const { spellName } = useParams()
  console.log(spellDetails);
  useEffect(() => {
    getSpellDetails(spellName)
    .then(spellData => setSpellDetails(spellData))
  }, [])

  return (
  <>
    <h3>Spell Details</h3>
      <h1>{spellDetails.name}</h1>
    <div>
      { spellDetails.name ? 
      <div className='app'>
        <div className='card'>
          <h3>Description :</h3>
          <p>{spellDetails.desc[0]}</p>
          <h3>Attack Type: {spellDetails.attack_type}</h3>
          <h3>Range: {spellDetails.range}</h3>
          <h3>Damage at character level: </h3>
          <h3>Spell Player Classes</h3>

          {spellDetails.classes.length ?
            <>
              {spellDetails.classes.map(playerClass =>
                <div key={playerClass.index}>
                  <p>{playerClass.name}</p>
                </div>
              )}
            </>
            :
            <p>No player classes may use this spell</p>
          }
        </div>
      </div>
      :
        <>
          <p>Loading spell details...</p>
        </>
      }
    </div>
  </>
  );
}
 
export default SpellDetails;