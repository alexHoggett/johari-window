import NavButton from "../components/NavButton";

const HomePage = () => {
  return (
    <div className="p-12 flex flex-col gap-12 items-start w-min">
      <h1 className='text-9xl text-orange-200'>Johari <br/> Window</h1>
      <p className="max-w-lg text-xl"> 
      Unlock the mysteries of your mind and discover the hidden depths of your personality. Are you curious to explore the unknown parts of yourself that even you may not be aware of? Or perhaps you seek to understand the intricate dynamics of your relationships with others? Our application offers a unique and intriguing way to reveal the secrets of your true self and connect with others on a deeper level.
      </p>
      <div className="flex justify-center items-center w-full gap-9">
        <NavButton destination="/start">Start</NavButton>
        <NavButton destination="#about">Learn More</NavButton>
      </div>
    </div>
  )
}

export default HomePage;