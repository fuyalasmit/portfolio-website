import React from 'react'
import Button from './Button'

const HeroContent = () => {
  return (
    <div className='text-left md:max-w-72 lg:max-w-lg'>
        <p className='text-xl font-medium text-blue-300'>Asmit Phuyal</p>
        <h2 className='mt-4 font-serif text-3xl font-bold tracking-wide text-white/80 md:text-4xl lg:mt-8 lg:text-5xl'>Computer Engineer To Be...</h2>
        <p className='mt-4 text-white/40 md:text-lg'>To be a Computer Engineer is so amazing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quaerat nemo voluptatibus molestias sint vero sequi, culpa velit impedit optio est, amet commodi?</p>
        <div className='flex items-center gap-3 mt-5'>
            <Button>Hire Me</Button>
            <Button variant='outline'>My Resume</Button>
        </div>
    </div>
  )
}

export default HeroContent