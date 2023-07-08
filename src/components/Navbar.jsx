import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <header className='bg-gray-800 md:sticky top-0 z-20'>
      <div className='container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center'>
        <a href='/' className='title-font font-medium text-white mb-1 md:mb-0'>
          <svg xmlns="http://www.w3.org/2000/svg" className='pt-4' width="85px" height="85px" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#3F51B5" stroke="none">
            <path d="M1649 2226 c-15 -9 -33 -30 -42 -48 -9 -19 -45 -63 -81 -98 -35 -36 -67 -76 -70 -90 -2 -14 -12 -78 -21 -142 -11 -76 -21 -118 -29 -118 -18 0 -106 58 -152 100 -32 29 -51 38 -93 44 -66 9 -76 2 -18 -12 30 -8 56 -25 85 -56 23 -24 47 -46 54 -49 7 -2 10 -8 6 -12 -4 -4 -21 -2 -37 5 -17 6 -36 10 -43 7 -8 -4 -7 -6 5 -6 31 -2 18 -20 -19 -27 -58 -11 -132 3 -189 35 -51 29 -56 30 -97 17 l-43 -12 39 -7 c21 -3 66 -21 100 -39 57 -31 68 -33 166 -34 89 -1 147 -9 207 -29 10 -3 10 -10 2 -28 -9 -20 -7 -34 10 -72 12 -26 21 -58 21 -71 0 -13 2 -24 4 -24 3 0 25 14 49 30 25 17 50 30 56 30 6 0 20 18 31 40 11 22 22 40 25 40 2 0 35 -11 74 -25 l70 -26 98 16 c91 15 98 15 113 -2 10 -10 58 -66 109 -126 l91 -107 0 103 0 103 -102 70 -103 71 -88 -20 c-53 -11 -102 -16 -123 -13 -30 6 -34 10 -34 39 0 41 26 116 50 142 49 54 74 175 42 207 -9 9 -12 9 -12 0 0 -7 -4 -12 -10 -12 -5 0 -2 21 8 48 15 40 22 47 47 50 83 7 96 12 85 32 -6 11 -29 25 -53 31 -23 7 -52 21 -64 32 -28 25 -91 31 -124 13z m127 -31 c26 -14 53 -25 59 -25 7 0 19 -8 26 -17 13 -15 11 -16 -19 -10 -20 4 -49 1 -75 -9 -69 -26 -86 -27 -112 -10 -48 31 -20 96 41 96 18 0 54 -11 80 -25z m-136 -85 c14 -11 39 -20 56 -20 35 0 46 -16 37 -51 -4 -14 0 -26 11 -35 10 -6 18 -25 18 -41 1 -32 -31 -110 -54 -133 -8 -9 -23 -39 -32 -67 -13 -39 -21 -50 -34 -46 -10 2 -26 -5 -37 -17 -26 -28 -9 -55 33 -55 17 0 37 -6 43 -12 17 -17 66 -16 160 3 l78 16 68 -46 c118 -78 116 -76 119 -147 l3 -63 -46 49 c-130 142 -154 166 -166 158 -6 -4 -50 -13 -97 -18 -73 -9 -92 -8 -130 6 -91 34 -102 33 -129 -6 -13 -19 -28 -32 -34 -28 -6 3 -7 1 -3 -5 6 -10 -41 -42 -62 -42 -5 0 -19 21 -30 47 -15 36 -18 53 -10 72 12 33 -3 44 -95 67 -63 15 -69 18 -47 27 14 5 32 13 41 17 11 6 32 0 63 -15 l46 -23 19 24 c13 17 22 54 30 126 7 57 15 113 19 125 6 20 120 152 132 152 3 0 16 -8 30 -19z m4 -426 c10 -26 7 -32 -14 -27 -11 3 -20 7 -20 8 0 12 14 35 20 35 4 0 11 -7 14 -16z" /> <path d="M1690 2191 c-20 -39 -13 -41 105 -32 20 2 20 2 1 13 -15 8 -21 8 -24 0 -6 -20 -22 -13 -32 13 -11 30 -35 33 -50 6z" /> </g>
          </svg>
        </a>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700  flex flex-wrap items-center text-base justify-center'>
          <a href='#projects' className='mr-5 hover:text-white'>
            Past Work
          </a>
          <a href='#skills' className='mr-5 hover:text-white'>
            Skills
          </a>
          <a href='#testimonials' className='mr-5 hover:text-white'>
            Testimonials
          </a>
        </nav>
        <a
          href='#contact'
          className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
          Hire Me
          <ArrowRightIcon className='w-4 h-4 ml-1' />
        </a>
      </div>
    </header>
  )
}

export default Navbar