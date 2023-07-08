import React, { useState } from 'react';
import Images from '../constants/images';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Cntent-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id='contact' className='relative'>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
          <img
            className='absolute inset-0  opacity-50'
            src={Images.Background}
            alt='background'
          />
          <div className='w-max bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
            <div className='lg:w-max px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                EMAIL
              </h2>
              <a href='mailto:corneillekouassivi@gmail.com' className='text-indigo-400 leading-relaxed'>
                corneillekouassivi@gmail.com
              </a>
              <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
                PHONE
              </h2>
              <a href='tel:+1 (438) 520-3355' className='leading-relaxed'>(438) 520-3355</a>
            </div>
          </div>
        </div>
        <form
          netlify
          name='contact'
          onSubmit={handleSubmit}
          className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
          <h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
            Take A Coffee & Chat With Me
          </h2>
          <p className='leading-relaxed mb-5'>
            I'm genuinely excited to chat with you and discover how to bring your ideas to life.
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm text-gray-400'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-400'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='message' className='leading-7 text-sm-gray-700'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact