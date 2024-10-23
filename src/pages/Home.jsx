import React from 'react'
import logo from "../assets/logo.png"
const Home = () => {
  return (
    <main className=''>
      <div className='max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center'>
        <div className='uppercase mt-15 tracking-widest'>
          <p className='p-5 mb-2'>Creating innovative solutions, turning dreams into reality through code.</p>
          <p className='p-5'>Building seamless experiences, merging design and functionality through code.</p>
        </div>
        <div className='mt-20 object-cover'>
          <img src={logo} alt="logo" className='object-scale-down max-w-80 md:max-w-90 h-60 rounded-md shadow-md p-10 ring-4 ring-slate-200 transition-opacity duration-500 ' />
        </div>
      </div>

      <div className='mt-20'>
        <div className=' bg-slate-400 text-black'>
          <div className='flex flex-col md:flex-row ring-4 ring-slate-50 p-20 '>

            <div className='m-5  rounded-xl p-5'>
              <h3 className='uppercase text-center mb-5 underline font-semibold'>Backend Side</h3>
              <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi minus nobis vitae enim temporibus cum recusandae cumque! Voluptatem, veniam!</p>
              <div className='flex items-center justify-center p-3 ring-1 ring-slate-400 shadow-2xl rounded-full'>
                <img src={logo} alt="logo" className='h-20' />

              </div>
            </div>
            <div className='m-5  rounded-xl p-5'>
              <h3 className='uppercase text-center mb-5 underline font-semibold'>Backend Side</h3>
              <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi minus nobis vitae enim temporibus cum recusandae cumque! Voluptatem, veniam!</p>
              <div className='flex items-center justify-center p-3 ring-1 ring-slate-400 shadow-2xl rounded-full'>
                <img src={logo} alt="logo" className='h-20' />

              </div>
            </div>
            <div className='m-5  rounded-xl p-5'>
              <h3 className='uppercase text-center mb-5 underline font-semibold'>Backend Side</h3>
              <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi minus nobis vitae enim temporibus cum recusandae cumque! Voluptatem, veniam!</p>
              <div className='flex items-center justify-center p-3 ring-1 ring-slate-400 shadow-2xl rounded-full'>
                <img src={logo} alt="logo" className='h-20' />

              </div>
            </div>


          </div>

        </div>
      </div>


    </main>
  )
}

export default Home