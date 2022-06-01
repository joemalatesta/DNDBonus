import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';

const ClassDetails = () => {
  const [classDetails, setClassDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    // This is where the API call will go
    getDetails(location.state.classTitle.url)
    .then(classDetails => setClassDetails(classDetails))
  }, [])
    console.log(classDetails)
  return (
    <>
      <div>
        <img 
          style={{ width: "100px", height: "100px" }}
          src={`/images/${classDetails.name}.svg`} 
          alt="class-logo"
        />
        <h3>Class Details</h3>
        {classDetails.name ?
          <div className='app'>
            <div className='card'>
              <h2>{classDetails.name}</h2>
              <div>Hit die: d{classDetails.hit_die}</div>
              <h3>Speed: {classDetails.speed}</h3>
              <h3>Proficiencies:</h3>
              {classDetails.proficiencies.map((proficiency) => (
                <div key={proficiency.index}>{proficiency.name}</div>
                ))}
            </div>
          </div>
          :
          <>
            <h2>Loading class details...</h2>
          </>
        }
      </div>
    </>
  );
}
 
export default ClassDetails;
