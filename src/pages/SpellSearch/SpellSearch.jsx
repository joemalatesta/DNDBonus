import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { spellSearch } from '../../services/api-calls';
import SpellCard from '../../components/SpellCard/SpellCard';

const SpellSearch = (props) => {
  const [spells, setSpells] = useState([])

  const handleSpellSearch = formData => {
    spellSearch(formData)
    .then(spellResults => setSpells(spellResults.results))
  }

  return (
    <>
    <h3>Such Spellz</h3>
      <SearchForm handleSpellSearch={handleSpellSearch} />
      {spells.length ? 
        <>
    <div className='app'>
        <div className=''>
          {spells.map(spell => 
            <div className='spell_card'>
              <SpellCard className="card" key={spell.index} spell={spell} />
            </div>
          )}
        </div>  
      </div>
        </>
        :
        <h3>Please search for a spell!</h3>
      }
    </>
  );
}
 
export default SpellSearch;