import React from 'react'
interface NavbarProps {
  scrollToSection: (id: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {



  return (
    <div>
      <ul className='flex max-md:flex-col max-md:text-center gap-[2rem] md:text-[24px] text-[16px] '>
      <button onClick={() => scrollToSection('section1')}>About</button>
      <button onClick={() => scrollToSection('section2')}>Skill </button>
      <button onClick={() => scrollToSection('section3')}>Project </button>
      <button onClick={() => scrollToSection('section4')}>Contact </button>
        </ul>  
    </div>
  )
}

export default Navbar