export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Indumukhi
      </h1>
      <h2 className="text-xl md:text-2xl text-purple-400 font-medium mb-2">
        Senior Gen AI Developer
      </h2>
      <p className="text-lg text-gray-400 mb-8">Full Stack Engineer</p>
      <a
        href="#projects"
        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
      >
        View Projects
      </a>
    </section>
  )
}
