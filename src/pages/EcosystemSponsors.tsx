import nitDelhiLogo from '../assets/NIT_Delhi.png'
import indianBitLogo from '../assets/Indian_BIT.png'
import nitSilcharLogo from '../assets/NIT_Silchar.png'
import delhiveryRoboticsLogo from '../assets/Delhivery_Robotics.png'
import iitBombayLogo from '../assets/IIT_Bombay.png'
import generalRoboticsLogo from '../assets/General_robotics.png'
import { Button } from '../components/ui/Button';

const signupCards = [
  'Become In Judge',
  'Volunteer',
  'Community Member',
]

const sponsorLogos = [
  { src: nitDelhiLogo, alt: 'NIT Delhi' },
  { src: indianBitLogo, alt: 'Indian BIT' },
  { src: nitSilcharLogo, alt: 'NIT Silchar' },
  { src: delhiveryRoboticsLogo, alt: 'Delhivery Robotics' },
  { src: iitBombayLogo, alt: 'IIT Bombay' },
  { src: generalRoboticsLogo, alt: 'General Robotics' },
]

function SignupCard({ title }: { title: string }) {
  return (
    <article className="rounded-[8px] border border-white/15 bg-[#151515] px-4 py-4 shadow-[0_2px_16px_rgba(0,0,0,0.22)] sm:px-5 sm:py-5">
      <h3 className="font-orbitron-500 text-[clamp(1rem,1.5vw,1.2rem)] uppercase leading-none tracking-[0.02em] text-primary">
        {title}
      </h3>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Name"
          className="mt-4 h-10 w-full rounded-[8px] bg-[#1E1E1E] text-sm text-primary placeholder-primary/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#1E1E1E]"
          style={{ paddingInline: '16px' }}
        />

        <input
          type="text"
          placeholder="Name"
          className="mt-4 h-10 w-full rounded-[8px] bg-[#1E1E1E] text-sm text-primary placeholder-primary/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#1E1E1E]"
          style={{ paddingInline: '16px' }}
        />

        <input
          type="text"
          placeholder="Name"
          className="mt-4 h-10 w-full rounded-[8px] bg-[#1E1E1E] text-sm text-primary placeholder-primary/80 border border-white/15 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#1E1E1E]"
          style={{ paddingInline: '16px' }}
        />
      </div>

      <Button variant="solid" size="sm" className="mt-6 w-full">
        Sign Up
      </Button>
    </article>
  )
}

function EcosystemSponsors() {
  return (
    <section className="overflow-hidden bg-black text-primary">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <h2 className="font-orbitron-500 text-[34px] uppercase leading-[0.95] tracking-[0.02em] text-primary">
          Join The Ecosystem
        </h2>

        <div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {signupCards.map((title) => (
            <SignupCard key={title} title={title} />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-orbitron-500 text-[24px] uppercase tracking-[0.02em] text-primary sm:text-[19px]">
            Sponsors
          </h3>

          <div className="mx-auto mt-6 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
            {sponsorLogos.map((sponsor) => (
              <div
                key={sponsor.alt}
                className="flex min-h-[68px] items-center gap-4 sm:gap-5"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="h-24 w-24 shrink-0 object-contain opacity-85 sm:h-24 sm:w-24 lg:h-24 lg:w-24"
                />
                <span className="max-w-[7.5rem] font-body text-[13px] font-medium uppercase leading-[1.05] tracking-[0.04em] text-primary/72 sm:text-[14px] lg:max-w-[8.5rem]">
                  {sponsor.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemSponsors
