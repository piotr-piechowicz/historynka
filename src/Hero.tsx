import { useEffect, useRef, useState } from 'react'
import cover from './img/cover.jpeg'
import img1 from './img/001.jpeg'
import img2 from './img/002.jpeg'
import img3 from './img/003.jpeg'

const SLIDES = [
  { src: img1, alt: 'Dziewczynka oglądająca stary dokument przez lupę' },
  { src: img2, alt: 'Stara mapa, pergamin, pióro i klepsydra' },
  { src: img3, alt: 'Dzieci uczące się historii przy drewnianym stole' },
]
const INTERVAL_MS = 3000
const PARALLAX_SPEED = 0.4

function ParallaxBackground() {
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const offset = Math.min(window.scrollY, window.innerHeight * 2) * PARALLAX_SPEED
      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(0, ${offset}px, 0)`
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      {/* Warstwa wyższa o 40%, żeby przesuwanie nie odsłaniało pustych krawędzi */}
      <div
        ref={layerRef}
        className="absolute inset-x-0 -top-[40%] bottom-0 -z-20 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${cover})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/50 to-black/25"
        aria-hidden="true"
      />
    </>
  )
}

// Slot 0 = środek (aktywny), 1 = prawa strona, 2 = lewa strona
const SLOT_STYLES = [
  { transform: 'translate(-50%, -50%) scale(1)', opacity: 1, zIndex: 10 },
  { transform: 'translate(-11%, -50%) scale(0.6)', opacity: 0.7, zIndex: 0 },
  { transform: 'translate(-111%, -50%) scale(0.6)', opacity: 0.7, zIndex: 0 },
]

function Carousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => setActive((a) => (a + 1) % SLIDES.length), INTERVAL_MS)
    return () => clearTimeout(id)
  }, [active])

  return (
    <div
      className="relative mx-auto aspect-[16/10] w-full max-w-xl"
      role="group"
      aria-roledescription="karuzela"
      aria-label="Galeria ilustracji"
    >
      {SLIDES.map((slide, i) => {
        const slot = (i - active + SLIDES.length) % SLIDES.length
        return (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={slide.alt}
            aria-current={slot === 0}
            className="absolute left-1/2 top-1/2 aspect-square w-[54%] cursor-pointer overflow-hidden rounded-2xl border-4 border-white/80 shadow-2xl transition-all duration-700 ease-in-out"
            style={SLOT_STYLES[slot]}
          >
            <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
          </button>
        )
      })}
    </div>
  )
}

function Hero() {
  return (
    <section id="o-mnie" className="relative isolate scroll-mt-16 overflow-hidden">
      <ParallaxBackground />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-28">
        <div className="text-center md:text-right">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-300">
            Portfolio - Redaktor Merytoryczny
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Katarzyna Piechowicz
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-100">
            Historyczka i archiwistka, absolwentka Uniwersytetu Jagiellońskiego z 12-letnim doświadczeniem nauczycielskim
            na różnych etapach edukacji. Opracowuję karty pracy, gry dydaktyczne oraz scenariusze zajęć oparte na literaturze
            akademickiej i sprawdzonych metodach nauczania, wspierając się technicznie narzędziami AI.
          </p>
          <a
            href="#materialy"
            className="mt-10 inline-block rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-900 shadow transition hover:bg-amber-300"
          >
            Zobacz materiały
          </a>
        </div>
        <Carousel />
      </div>
    </section>
  )
}

export default Hero
