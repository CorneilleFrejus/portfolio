import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <CodeBracketIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
            Apps I've Built
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Experience comes from practicing. Here are a few of the projects i've worked on.
          </p>
        </div>
        <div className='flex flex-wrap justify-center'>
          {projects.map((project) => (
            <div key={project.image} className='w-full sm:w-1/2 md:w-1/3 m-4 border border-gray-800 rounded-lg'>
              <img src={project.image} alt='gallery' className='rounded-t-lg' />
              <div className='p-5'>
                <h2 className='tracking-widset text-sm title-font font-medium text-green-400 mb-1'>{project.subtitle}</h2>
                <h1 className='title-font text-lg font-medium text-white mb-3'>{project.title}</h1>
                <p className='leading-relaxed justify'>{project.description}</p>
                <a
                  href={project.viewLink}
                  className='inline-flex text-white bg-green-500 border-0 py-2 px-6 m-1 focus:outline-none hover:bg-green-600 rounded text-lg'
                >
                  View Site
                </a>
                <a
                  href={project.codeLink}
                  className='inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-5 m-1 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects