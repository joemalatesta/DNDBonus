import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';


const RaceDetails = () => {
  const [raceDetails, setRaceDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
   
    getDetails(location.state.raceTitle.url)
    .then(raceDetails => setRaceDetails(raceDetails))
  }, [])

  console.log(raceDetails);

  return (
    <>
      <div className='app'>
        <div className='center'>
          <div className='card race'>
      <img 
        style={{ width: "100px", height: "100px" }}
        src={`/images/${raceDetails.name}.png`} 
        alt="class-logo"
      />
      <h1>{raceDetails.name}</h1>
            <h3>Class Details</h3>
            <div>
              <h4>Speed: {raceDetails.speed}</h4>
            </div>
            <div>
              <h4>Alignment:</h4>
              <p>{raceDetails.alignment} </p>
            </div>
            <div>
              <h4>Languages</h4>
                {raceDetails.languages?.length ? 
                  <>
                    {raceDetails.languages.map((info)=>
                    <div key={info.name}>
                      <p>{info.name}</p>
                      </div>
                    )}
                  <p>{raceDetails.language_desc}</p>
                  </>
                  :
                  <p>This poor slob has no traits</p>
                } 
            </div>
            <div>
              <h4>Size Description</h4>
              <p>{raceDetails.size_description}</p>
            </div>
            <div>
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
            <div>
              <h3>Life Expectancy</h3>
              <p>{raceDetails.age}</p>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}
 
export default RaceDetails;
