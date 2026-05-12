const links = ['About', 'Projects', 'Contact']

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="text-xl font-bold text-white">
          Indumukhi
        </a>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
