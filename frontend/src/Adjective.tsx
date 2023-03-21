import { useState } from 'react'
import React from 'react'

interface AdjectiveProps {
  text: string;
};

function Adjective({ text }: AdjectiveProps): JSX.Element {
  const [selected, setSelected] = useState(false)

  return (
    <div>
      { text }
    </div>
  )
}

export default Adjective;