import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';

const FullClassDetails = () => {
  const [classDetails, setClassDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.classTitle.url)
    .then(classDetails => setClassDetails(classDetails))
  }, [])
  


  return (
    <>
      <div>
        {classDetails.name ?
          <div className='app'>
            <div className='card'>
            <img 
              style={{ width: "100px", height: "100px" }}
              src={`/images/${classDetails.name}.svg`} 
              alt="class-logo"
            />
            <h3>Class Details</h3>
              <h2>{classDetails.name}</h2>
              <h2>SubClasses</h2>
              {classDetails.subclasses.map((subClass) => (
                <p key={subClass.index}>{subClass.name}</p>
              ))}

              <div>Hit die: d{classDetails.hit_die}</div>
              <h3>Speed: {classDetails.speed}</h3>
              <h3>Proficiencies:</h3>
              {classDetails.proficiencies.map((proficiency) => (
                <div key={proficiency.index}>{proficiency.name}</div>
                ))}
               <h3>Starting Stuff</h3>  
              {classDetails.starting_equipment.map((stuff)=>(
                <div key={stuff.index}>{stuff.equipment.name}</div>
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
 
export default FullClassDetails;
