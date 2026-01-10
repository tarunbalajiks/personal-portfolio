import { GraduationCap, Code } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'MSc Artificial Intelligence',
      school: 'University of Edinburgh (UOE)',
      period: '2024 - 2025',
      highlights: [
        'Specialization in Computer Vision & NLP',
        'Distinction in Machine Learning Coursework',
      ],
      icon: GraduationCap,
      color: 'purple',
    },
    {
      degree: 'BSc Computer Science',
      school: 'University of Technology',
      period: '2020 - 2024',
      highlights: [
        'First Class Honours (1:1)',
        'President of AI Society',
      ],
      icon: Code,
      color: 'blue',
    },
  ]

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">Education</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, idx) => {
            const Icon = edu.icon
            const colorClass = edu.color === 'purple' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'
            
            return (
              <div key={idx} className="glass-card p-8 rounded-2xl space-y-6 hover:bg-white/5 transition-colors">
                <div className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center`}>
                  <Icon size={24} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                  <p className={`${edu.color === 'purple' ? 'text-purple-300' : 'text-blue-300'} mt-1`}>
                    {edu.school}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{edu.period}</p>
                </div>
                
                <ul className="space-y-2 text-gray-300 text-sm">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${edu.color === 'purple' ? 'bg-purple-400' : 'bg-blue-400'}`} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
