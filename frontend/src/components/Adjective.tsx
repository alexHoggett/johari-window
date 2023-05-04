import { useState } from 'react'
import descriptions from './descriptions';

interface AdjectiveProps {
  children: string;
};

function Adjective({ children }: AdjectiveProps): JSX.Element {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected);
  }

  return (
    <button 
      className={`px-10 py-2 border text-lg rounded-full w-max text-center transition duration-200 ${selected && `bg-orange-200 text-black `}`}
      onClick={handleClick}
      >
      { children }
    </button>
  )
}

export default Adjective;