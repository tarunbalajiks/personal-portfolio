export default function Experience() {
  const experiences = [
    {
      title: 'AI Research Intern',
      company: 'Tech Giant Corp',
      location: 'London, UK',
      period: 'Jun 2025 - Present',
      description: 'Developing novel architectures for efficient large language model inference. Reduced model latency by 40% through quantization techniques and custom kernel implementation.',
      tags: ['LLMs', 'CUDA', 'Python'],
      highlight: true,
    },
    {
      title: 'Machine Learning Engineer',
      company: 'StartupAI',
      location: 'Remote',
      period: 'Jun 2024 - Aug 2024',
      description: 'Built and deployed computer vision pipelines for automated quality control. Implemented end-to-end MLOps workflow using MLflow and Docker.',
      tags: ['Computer Vision', 'MLOps', 'Docker'],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative pl-8 border-l-2 ${exp.highlight ? 'border-purple-500' : 'border-white/10'} space-y-4`}>
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${exp.highlight ? 'bg-purple-500 shadow-[0_0_10px_rgb(168,85,247)]' : 'bg-white/20'}`} />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <span className={`font-mono text-sm ${exp.highlight ? 'text-purple-400' : 'text-gray-400'}`}>
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg text-gray-200">{exp.company} • {exp.location}</div>
              
              <p className="text-gray-300 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex gap-2 flex-wrap">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
