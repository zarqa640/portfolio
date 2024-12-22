import Image from 'next/image';



import image1 from "../../public/image1.png"
import image2  from "../../public/image2.png"
import image3 from "../../public/image3.png"

const Projects = () => {
  return (
    <div>
      <section id="projects" className="py-20 bg-black text-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <Image
                src={image1}
                alt="Dynamic Resume Builder"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dynamic Resume Builder</h3>
                <p className="text-gray-400 mb-4">This is a dynamic resume builder, my first project.</p>
                <a
                  href="https://milestone5-kohl.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm"
                >
                  View Live
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <Image
                src={image2}
                alt="E-Commerce Website"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Website</h3>
                <p className="text-gray-400 mb-4">This is an E-Commerce website, my second project.</p>
                <a
                  href="https://my-first-hakathon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm"
                >
                  View Live
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <Image
                src={image3}
                alt="Portfolio Website"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-gray-400 mb-4">This is a portfolio website, my third project.</p>
                <a
                  href="https://example.com/project-three"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

