import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';
import MonsterDetails from '../MonsterDetails/MonsterDetails';
import Card from '../../components/Card/Card'

const RaceDetails = () => {
  const [raceDetails, setRaceDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
   
    getDetails(location.state.raceTitle.url)
    .then(raceDetails => setRaceDetails(raceDetails))
  }, [])
    console.log(raceDetails)
  return (
    <>
    <img 
      style={{ width: "100px", height: "100px" }}
      src={`/images/${raceDetails.name}.png`} 
      alt="class-logo"
    />
      <h1>{raceDetails.name}</h1>
      <div className='app'>
        <div className='center'>
          <div className='card'>
            <h3>Class Details</h3>
            <h4>Speed: {raceDetails.speed}</h4>
            <h4>Alignment:</h4>
            <p>{raceDetails.alignment} </p>
            <h4>Size Description</h4>
            <p>{raceDetails.size_description}</p>
            <h3>Traits</h3>
            {raceDetails.traits?.length ? 
              <>
                {raceDetails.traits.map((info)=>
                <div key={info.name}>
                  <p>{info.name}</p>
                  </div>
                )}
              </>
              :
              <p>This poor slob has no traits</p>
            }
          </div>
        </div>
      </div>  
    </>
  );
}
 
export default RaceDetails;
