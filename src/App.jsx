import { useState } from 'react'
import { puppyList } from './data'

import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  console.log(featPupId)
  // console.log(puppies);

  return (
    <>
      <div className='app'>
        {featPupId && (
          <div className='featuredPupBox'>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>

        )}
        <div>

          {puppies.map((puppy) => {
            return <p onClick={() => {

              // console.log(featuredPup);

              return setFeatPupId(puppy.id)
            }} key={puppy.id}>{puppy.name}</p>
          })
          }
        </div>



      </div>

    </>
  );
}

export default App
