import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-white/5 backdrop-blur-sm py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <span className="font-display text-xl font-bold text-gradient">AI.Engineer</span>
            <p className="text-sm text-gray-400 max-w-xs">
              Crafting intelligent systems with a touch of creativity. Based in Edinburgh, UK.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:hello@example.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AI Engineer Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
