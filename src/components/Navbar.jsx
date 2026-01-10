import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold text-gradient">
          AI.Engineer
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all">
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass-card border-b border-white/5 p-4 flex flex-col gap-4 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors text-left"
            >
              {item.name}
            </button>
          ))}
          <button className="w-full px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all">
            Resume
          </button>
        </div>
      )}
    </nav>
  )
}
