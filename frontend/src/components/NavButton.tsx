import { Link } from 'react-router-dom'

interface ButtonProps {
  children: string,
  destination: string
}

const NavButton = ({ children, destination }: ButtonProps) => {
  // Nice button here with hover effect
  return (
    <Link 
      type="button"
      className="px-10 py-2 border text-lg rounded-full w-max text-center transition duration-200 hover:bg-orange-200 hover:text-black"
      to={destination}
    >
      {children}
    </Link>
  )
}

export default (NavButton)