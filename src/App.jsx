
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const lodedcoffees = useLoaderData();
  const [coffees, setCoffes] = useState(lodedcoffees)

  return (
    <div className='m-20'>

      <h1 className='text-6xl text-center text-purple-600 my-20 font-bold'>Hot Hot Cold Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffes={setCoffes}
            coffee={coffee}
          >
          </CoffeeCard>)
        }

      </div>
    </div>
  )
}

export default App
