import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 w-fit mx-auto lg:mx-0">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-purple-300">AI Engineer & Researcher</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            Crafting <span className="text-gradient">Intelligent</span> <br />
            Digital Experiences
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Master's student at University of Edinburgh specializing in Deep Learning and Computer Vision. 
            I bridge the gap between complex AI research and beautiful, functional applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center justify-center gap-2 transition-all"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 rounded-full border border-purple-500/30 hover:bg-purple-500/10 text-white font-medium transition-all">
              Contact Me
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center glass-card">
              <div className="text-6xl animate-float">✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
