import botLogo from '../assets/bot-logo.png'
import Button from './ui/Button'

const navItems = [
  { label: 'Events', href: '#events' },
  { label: 'Programs', href: '#programs' },
  { label: 'Community', href: '#community' },
  { label: 'Ranks', href: '#ranks' },
] as const

const Navbar = () => {  
  return (
    <header className="sticky top-0 z-50 w-full bg-page/90 backdrop-blur-md">
      <nav className="mx-auto flex h-25.75 w-full max-w-full items-start justify-between px-6.75 pt-6.5">
        <a href="/" className="block h-14.5 w-72.5 shrink-0">
          <img
            src={botLogo}
            alt="Bot League"
            className="block h-full w-full object-contain"
          />
        </a>

        <div className="flex flex-1 items-start justify-center gap-10 pt-3">
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

        <div className="flex shrink-0 items-start gap-6 pt-1.25">
          <Button variant="outline" size="sm" className="w-30.25 px-0">
            LOGIN
          </Button>
          <Button variant="solid" size="sm" className="w-40.75 px-0">
            REGISTER NOW
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
