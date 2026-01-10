import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Neural Style Transfer',
    description: 'A deep learning application that applies artistic styles to images using VGG19 architecture. Features real-time processing and high-resolution output.',
    tags: ['PyTorch', 'React', 'FastAPI', 'Computer Vision'],
    icon: '🎨',
  },
  {
    title: 'Cognitive Search Engine',
    description: 'Semantic search engine built with transformer models to understand context and intent, outperforming traditional keyword matching.',
    tags: ['NLP', 'BERT', 'Elasticsearch', 'Python'],
    icon: '🧠',
  },
  {
    title: 'Predictive Analytics Dashboard',
    description: 'Real-time data visualization platform for financial forecasting using LSTM networks. Processes millions of data points with sub-second latency.',
    tags: ['TensorFlow', 'D3.js', 'AWS', 'Time Series'],
    icon: '📊',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Selected Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of projects exploring the frontiers of AI, from generative models to computer vision systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{project.icon}</div>
              
              <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
                  <Github size={16} /> Code
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
