import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/zarqa640" className="hover:text-blue-500 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/zarqa-khan-2936902ba/" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
        </div>
        <p className="text-gray-400">© 2024 Zarqa Khan. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
