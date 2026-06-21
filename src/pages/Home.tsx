import heroImage from '../assets/hero_image.png'
import Button from '../components/ui/Button'

function Home() {
  return (
    <section className="relative isolate min-h-[calc(100dvh-76px)] overflow-hidden bg-surface-strong">
      <div className="absolute inset-0 md:block">
        <img
          src={heroImage}
          alt="Robotics arena battle"
          className="h-full w-full object-cover object-center md:translate-x-10 lg:translate-x-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.96)_20%,rgba(0,0,0,0.12)_38%,rgba(0,0,0,0)_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100dvh-103px)] max-w-360 content-center gap-10 px-6 pb-10 pt-10 sm:px-8 md:pb-0 md:pt-0 lg:px-20.25">
        
        <div className="hidden md:inline-flex md:absolute md:right-20.25 md:top-4.5 max-w-full items-center gap-3 rounded-[5px] border border-border-subtle bg-page/75 px-5 py-2 text-[16px] text-primary shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:right-20.25">
          <span className="h-2 w-2 rounded-full bg-accent" />  
          <span className="font-body font-semibold text-accent">LIVE</span>
          <span className="font-body">:</span>
          <span className="font-body text-secondary">
            Episode 14 . Bengaluru Regionals
          </span>
          <span className="font-body font-semibold text-accent">WATCH LIVE</span>
        </div>

        <div className="max-w-195.25 lg:-translate-x-15">
          <h1 className="mt-8 max-w-195 font-orbitron-500 text-[clamp(3rem,6vw,72px)] font-semibold uppercase leading-[0.95] tracking-[0.02em] text-primary">
            India&apos;s Ultimate Robotics Arena
          </h1>

          <p className="mt-6 max-w-140 font-body text-[clamp(1.125rem,2vw,28px)] leading-[1.3] text-secondary">
            Build. Compete. Rank. The national ecosystem for robotics arena.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button variant="gradient" size="lg" className="w-full sm:w-59">
              CREATE ACCOUNT
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-59">
              EXPLORE EVENTS
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Home
