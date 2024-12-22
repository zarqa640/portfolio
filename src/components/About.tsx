import React from 'react'

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-300">
                I'm a passionate developer with 5 years of experience building web applications.
                I specialize in  Next.js.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me exploring new technologies,
                writing tech blogs, or contributing to open-source projects.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js',  'TypeScript', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
        
    </div>
    
  )
};

export default About
