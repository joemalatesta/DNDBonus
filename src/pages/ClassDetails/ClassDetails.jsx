import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';

const ClassDetails = () => {
  const [classDetails, setClassDetails] = useState({})
  const [toggle, setToggle] = useState (false)
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.classTitle.url)
    .then(classDetails => setClassDetails(classDetails))
  }, [])

  console.log(classDetails);
  
  return (
    <>
      <div>
        {classDetails.name ?
          <div className='app'>
            <div className={toggle ? 'largeCard' : 'card'}>
              <div className='name pic'></div>
            <img 
              style={{ width: "100px", height: "100px" }}
              src={`/images/${classDetails.name}.svg`} 
              alt="class-logo"
            />
            <h3 hidden={toggle ? true : false}>Class Details</h3>
            <h2>{classDetails.name}</h2>
            <h3>Sub Classes</h3>
            {classDetails.subclasses.map((sub)=>(
              <p>{sub.name}</p>
            ))}
            <button onClick={()=> setToggle(!toggle)}>
              {toggle ? 'Hide Details' : 'Show Details'}
            </button>
            {toggle &&
              <div>
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
            }
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
