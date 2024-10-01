/* eslint-disable no-unused-vars */
import React from 'react'

const About = () => { 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full py-12 md:py-24 px-5 md:px-20 bg-[#CDEA68] rounded-t-[8vw] md:rounded-t-[2vw]'>
      {/* Heading Section */}
      <div className='md:mr-[14vw]'>
        <h1 className='font-["Neue Montreal"] text-[8vw] leading-[9vw] md:text-[3.5vw] md:leading-[3.5vw]'>
          Echo is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
      </div>
      
      {/* Border and Expectations Section */}
      <div className='w-full border-t-[1px] pt-10 mt-20 border-[#9aa964] flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <p className='text-[5vw] md:text-[1.2vw]'>What you can expect:</p>
        </div>

        <div className='w-full md:w-1/2 flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2'>
            <p className='text-[5vw] md:text-[1.2vw]'>
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
            </p>
            
            <p className='text-[5vw] md:text-[1.2vw] mt-5'>
              We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          
          {/* Social Links */}
          <div className='w-full md:w-1/2 text-[5vw] md:text-[1.2vw] md:pl-48 md:pt-20 pt-10'>
            <p className='pb-5'>S:</p>
            <p>Instagram</p>
            <p>Behance</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className='w-full border-t-[1px] pt-10 mt-16 md:mt-32 flex flex-col md:flex-row gap-5 border-[#9aa964]'>
        <div className='w-full md:w-1/2'>
          <h1 className='text-[10vw] md:text-[4vw]'>Our approach :</h1>
          <button className='flex items-center gap-5 md:gap-10 mt-5 px-5 py-3 md:px-10 md:py-4 bg-zinc-900 text-white rounded-full'>
            READ MORE
            <div className='w-2 h-2 md:w-3 md:h-3 rounded-full bg-slate-100'></div>
          </button>
        </div>

        {/* Image */}
        <div className='w-full md:w-1/2 mt-5 md:mt-0'>
          <img className='h-[50vh] md:h-[70vh] rounded-3xl w-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="Our Approach" />
        </div>
      </div>
    </div>
  )
}

export default About