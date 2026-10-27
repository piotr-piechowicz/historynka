import Hero from './Hero.tsx'

const BASE = import.meta.env.BASE_URL
const YEAR = new Date().getFullYear()

const links = [
  { href: '#o-mnie', label: 'O mnie' },
  { href: '#materialy', label: 'Materiały' },
  { href: '#cv', label: 'CV' },
]

const iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'h-6 w-6 shrink-0',
  'aria-hidden': true,
} as const

function DownloadIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  )
}

function DiceIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="8.5" cy="15.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="15.5" r="1" fill="currentColor" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
      <path d="M4 21a2 2 0 0 1 2-2h13" />
      <path d="M9 7h6" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  )
}

const materials = [
  {
    title: 'Materiały edukacyjne',
    href: `${BASE}material.pdf`,
    Icon: BookIcon,
  },
  {
    title: 'Scenariusz lekcji z grą edukacyjną',
    href: `${BASE}scenariusz-lekcji.pdf`,
    Icon: DiceIcon,
  },
]

const CV_HREF = `${BASE}cv-katarzyna-piechowicz.pdf`

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="text-lg font-bold tracking-tight text-slate-900">
            historynka
          </a>
          <ul className="flex gap-4 text-sm font-medium sm:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-600 transition hover:text-indigo-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <Hero />

        <section id="materialy" className="scroll-mt-16">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Materiały</h2>
            <p className="mb-10 text-slate-600">Przykładowe materiały mojego autorstwa.</p>
            <div className="grid gap-8 md:grid-cols-2">
              {materials.map(({ title, href, Icon }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-72 flex-col items-center justify-center gap-6 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full [&>svg]:h-10 [&>svg]:w-10 bg-indigo-100 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon />
                  </span>
                  <span className="text-2xl font-semibold text-slate-900">{title}</span>
                  <span className="mt-auto inline-flex items-center gap-2 font-medium text-indigo-600">
                    Otwórz
                    <DownloadIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="cv" className="scroll-mt-16 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">CV</h2>
            <p className="mb-8 text-slate-600">Pełne doświadczenie zawodowe i wykształcenie.</p>
            <a
              href={CV_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-indigo-600 px-6 py-4 font-semibold text-white shadow transition hover:bg-indigo-700"
            >
              <UserIcon />
              Pobierz CV (PDF)
              <DownloadIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {YEAR} historynka.pl
      </footer>
    </div>
  )
}

export default App
