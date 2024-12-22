import React from 'react'
import Image from 'next/image';
import zarqa from"../../public/zarqa.png"

const Hero = () => {
  return (
     <div>
    

      {/* <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
           
        
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Zarqa Khan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Developer & UI/UX Designer
          </p>
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold transition-colors">
            View My Work
          </a>
        </div>
      </section> 
    </div> */}


<section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
  <div className="max-w-4xl mx-auto text-center">
    {/* Image Section */}
    <div className="flex justify-center mb-6">
      <img
        src="/zarqa.png" // Yahan apni image ka path lagayein
        alt="Zarqa Khan"
        className="w-44 h-44 rounded-full border-4 border-blue-500 shadow-lg"
      />
    </div>

    {/* Text Content */}
    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      Hi, I'm <span className="text-blue-500">Zarqa Khan</span>
    </h1>
    <p className="text-xl md:text-2xl mb-8 text-gray-300">
      Full Stack Developer & UI/UX Designer
    </p>
    <a
      href="#projects"
      className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold transition-colors"
    >
      View My Work
    </a>
  </div>
</section>
</div>


  )
};

export default Hero
