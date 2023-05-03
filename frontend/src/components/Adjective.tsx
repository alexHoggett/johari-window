import { useState } from 'react'
import descriptions from './descriptions';

interface AdjectiveProps {
  text: string;
};

function Adjective({ text }: AdjectiveProps): JSX.Element {
  const [selected, setSelected] = useState(false)

  return (
    <button className="px-10 py-2 border text-lg rounded-full w-max text-center transition duration-200 hover:bg-orange-200 hover:text-black">
      { text }
    </button>
  )
}

export default Adjective;