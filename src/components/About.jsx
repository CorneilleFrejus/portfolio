import React from 'react';
import Profile from '../assets/profile.png';
import Image from '../constants/images';

const About = () => {
  return (
    <section id='about'>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Hi, I'm Corneille.
            <br className='hidden lg:inline-block' /> Fullstack
            Developer
          </h1>
          <p className='mb-8 leading-relaxed'>
            I am passionate about designing intuitive user interfaces that provide an exceptional user experience while leveraging efficient and scalable backend solutions.
            I strive to stay updated with the latest industry trends and technologies to continuously enhance my skills and deliver high-quality software solutions.
          </p>
          <div className='flex justify-center'>
            <a
              href='#contact'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
            >
              Work With Me
            </a>
            <a
              href={Image.Resume}
              className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'
              download
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src={Profile}
          />
        </div>
      </div>
    </section>
  )
}

export default About