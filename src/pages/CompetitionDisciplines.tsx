import circuitBg from '../assets/circuit.png'
import roboRace from '../assets/robo_race.png'
import lineFollower from '../assets/line_follower.png'
import rcRace from '../assets/rc_race.png'
import roboDrone from '../assets/robo_drone.png'
import roboHockey from '../assets/robo_hockey.png'
import roboWar from '../assets/robo_war.png'

const disciplines = [
  {
    title: 'Robo Race',
    image: roboRace,
  },
  {
    title: 'Line Follower',
    image: lineFollower,
  },
  {
    title: 'RC Racing',
    image: rcRace,
  },
  {
    title: 'FPV Drone Racing & Aeromodelling',
    image: roboDrone,
    compactTitle: true,
  },
  {
    title: 'Robo Hockey',
    image: roboHockey,
  },
  {
    title: 'Robo War',
    image: roboWar,
  },
]

function DisciplineCard({
  title,
  image,
  compactTitle = false,
}: {
  title: string
  image: string
  compactTitle?: boolean
}) {
  return (
    <article className="group overflow-hidden rounded-[12px] border border-white/16 bg-[#151515] shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition-transform duration-300 ease-out hover:-translate-y-1">
      <div className="relative aspect-[1.35/1] overflow-hidden bg-[#ececec]">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_35%,rgba(0,0,0,0.18)_100%)]" />
      </div>

      <div className="flex min-h-[62px] items-center justify-center px-4 py-3 text-center">
        <h3
          className={[
            'font-body text-[clamp(1rem,1.6vw,1.35rem)] font-medium leading-[1.05] text-primary',
            compactTitle ? 'max-w-[16ch] text-[clamp(0.95rem,1.35vw,1.15rem)]' : '',
          ].join(' ')}
        >
          {title}
        </h3>
      </div>
    </article>
  )
}

function CompetitionDisciplines() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,76,76,0.10)_0%,rgba(0,0,0,0)_22%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_24%),linear-gradient(180deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.96)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage: `url(${circuitBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          backgroundSize: 'min(1200px, 92vw) auto',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_28%,rgba(255,255,255,0.03)_74%,rgba(255,255,255,0)_100%)]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <header className="max-w-[920px]">
          <p className="font-orbitron-500 text-[clamp(1rem,1.8vw,1.35rem)] uppercase tracking-[0.15em] text-accent">
            Sports
          </p>
          <h2 className="mt-3 font-orbitron-400 text-[clamp(2rem,4vw,52px)] uppercase tracking-[0.02em] text-primary">
            Competition Disciplines
          </h2>
        </header>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {disciplines.slice(0, 4).map((discipline) => (
            <DisciplineCard
              key={discipline.title}
              title={discipline.title}
              image={discipline.image}
              compactTitle={discipline.compactTitle}
            />
          ))}

          <DisciplineCard
            title={disciplines[4].title}
            image={disciplines[4].image}
          />
          <DisciplineCard
            title={disciplines[5].title}
            image={disciplines[5].image}
          />
        </div>
      </div>
    </section>
  )
}

export default CompetitionDisciplines
