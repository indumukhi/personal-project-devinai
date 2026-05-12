const skills = ['Python', 'FastAPI', 'React', 'LangChain', 'Docker']

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <p className="text-gray-400 leading-relaxed mb-8">
        I am a Senior Gen AI Developer with deep expertise in building
        intelligent, production-grade applications. I specialise in combining
        modern frontend frameworks with robust backend services and cutting-edge
        AI capabilities to deliver scalable solutions.
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="px-4 py-2 bg-gray-800 text-purple-400 rounded-full text-sm font-medium"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}
