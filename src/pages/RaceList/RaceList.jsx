import { useEffect, useState } from 'react'
import { getRaceList } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const RaceList = (props) => {
  const [races, setRaces] = useState([])

  useEffect(()=> {
    getRaceList()
    .then(raceData => setRaces(raceData.results))
  }, [])
  return (
    <>
      <div className='app'>
        <h3>Race List</h3>
        <div className='icon-container'>
          {races.map((raceTitle) => (
            <Link to='/race' state={{raceTitle}} key={raceTitle.index}>
              <div id="classDiv" >
                <img 
                  style={{ width: "100px", height: "100px" }}
                  src={`/images/${raceTitle.name}.png`} 
                  alt="class-logo"
                  />
                {raceTitle.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
 
export default RaceList;