const YOUTUBE_ID = 'dQw4w9WgXcQ' // TODO: podmień na ID swojego filmu
const BASE = import.meta.env.BASE_URL
const YEAR = new Date().getFullYear()

const links = [
  { href: '#o-mnie', label: 'O mnie' },
  { href: '#wideo', label: 'Wideo' },
  { href: '#materialy', label: 'Materiały' },
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

function DocumentIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
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
        <section id="o-mnie" className="scroll-mt-16 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Historynka
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Portfolio - Redaktor Merytoryczny
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Tworzę i weryfikuję treści edukacyjne – od scenariuszy filmowych po gry
              planszowe. Dbam o rzetelność merytoryczną, czytelny język i atrakcyjną formę
              przekazu.
            </p>
            <a
              href="#materialy"
              className="mt-10 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
            >
              Zobacz materiały
            </a>
          </div>
        </section>

        <section id="wideo" className="scroll-mt-16">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Wideo</h2>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-lg">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
                title="Film z YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>

        <section id="materialy" className="scroll-mt-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Materiały</h2>
            <p className="mb-10 text-slate-600">Pobierz przykładowe materiały mojego autorstwa.</p>
            <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row">
              <a
                href={`${BASE}scenariusz.pdf`}
                download
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-indigo-600 px-6 py-4 font-semibold text-white shadow transition hover:bg-indigo-700"
              >
                <DocumentIcon />
                Pobierz scenariusz (PDF)
                <DownloadIcon />
              </a>
              <a
                href={`${BASE}gra-planszowa.pdf`}
                download
                className="inline-flex items-center justify-center gap-3 rounded-lg border-2 border-indigo-600 px-6 py-4 font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                <DiceIcon />
                Pobierz grę planszową
                <DownloadIcon />
              </a>
            </div>
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
