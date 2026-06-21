import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import botLogo from '../assets/bot-logo.png'
import Button from './ui/Button'

const navItems = [
  { label: 'Events', href: '#events' },
  { label: 'Programs', href: '#programs' },
  { label: 'Community', href: '#community' },
  { label: 'Ranks', href: '#ranks' },
] as const

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-page/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-full items-center justify-between px-6 py-4 sm:px-8 lg:h-24 lg:px-6.75">
        <a href="/" className="block h-12 w-52 shrink-0 lg:h-14.5 lg:w-72.5">
          <img
            src={botLogo}
            alt="Bot League"
            className="block h-full w-full object-contain"
          />
        </a>

        <div className="ml-10 hidden flex-1 items-center justify-start gap-16 pt-3 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group inline-flex flex-col items-center font-display text-[22px] font-normal leading-none tracking-[0.02em] text-primary"
            >
              <span>{item.label}</span>
              <span className="mt-2 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-6 pt-1.25 md:flex">
          <Button variant="outline" size="sm" className="w-30.25 px-0">
            LOGIN
          </Button>
          <Button variant="solid" size="sm" className="w-40.75 px-0">
            REGISTER NOW
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-page/70 text-primary shadow-[0px_4px_14px_rgba(0,0,0,0.2)] transition-transform duration-200 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <Menu
              className={`absolute h-6 w-6 transition-all duration-300 ease-out ${
                isMenuOpen ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
              }`}
            />
            <X
              className={`absolute h-6 w-6 transition-all duration-300 ease-out ${
                isMenuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0'
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden border-t border-white/10 bg-page/95 backdrop-blur-md transition-[max-height,opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
          isMenuOpen
            ? 'max-h-[32rem] translate-y-0 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-full flex-col gap-5 px-6 py-6 sm:px-8">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-[14px] border border-white/10 bg-white/5 px-4 py-4 font-display text-[17px] tracking-[0.03em] text-primary transition-colors duration-200 ease-out hover:border-accent/50 hover:bg-white/10"
              >
                <span>{item.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/90" />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 pt-1">
            <Button
              variant="outline"
              size="sm"
              className="h-12 w-full rounded-[12px] text-[16px]"
              onClick={() => setIsMenuOpen(false)}
            >
              LOGIN
            </Button>
            <Button
              variant="solid"
              size="sm"
              className="h-12 w-full rounded-[12px] text-[16px]"
              onClick={() => setIsMenuOpen(false)}
            >
              REGISTER NOW
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
