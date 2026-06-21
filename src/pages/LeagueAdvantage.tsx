import leaderboardImage from '../assets/leaderboard.png'
import medalIcon from '../assets/medal.png'
import judgeIcon from '../assets/judge.png'
import careerIcon from '../assets/career.png'
import energyIcon from '../assets/energy.png'

const benefits = [
  {
    title: 'National Recognition',
    description: "Benchmark your skills on India's official robotics leaderboard.",
    icon: medalIcon,
  },
  {
    title: 'Fair Judging',
    description: 'Compete with confidence under standardized, expert-led evaluation.',
    icon: judgeIcon,
  },
  {
    title: 'Career Ops',
    description: 'Bridge the gap between arena victories and top-tier tech placements.',
    icon: careerIcon,
  },
  {
    title: 'High - Energy Eco',
    description: 'Join a nationwide community of elite innovators and robotics athletes.',
    icon: energyIcon,
  },
]

function BenefitItem({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) {
  return (
    <li className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
      <img
        src={icon}
        alt=""
        className="h-14 w-14 shrink-0 object-contain sm:h-[50px] sm:w-[50px]"
      />

      <div className="min-w-0 max-w-[463px]">
        <h3
          className="
            font-body
            uppercase
            text-white
            leading-[1]
            tracking-[0.04em]
            sm:text-[20px]
            lg:text-[25px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            max-w-[436px]
            font-body
            text-[16px]
            leading-[1.1]
            text-white/55
          "
        >
          "{description}"
        </p>
      </div>
    </li>
  )
}

function LeagueAdvantage() {
  return (
    <section className="overflow-hidden bg-[#151313] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:relative lg:px-[97px] lg:py-[104px]">
        <div className="relative z-10 max-w-[600px]">
          <p
            className="
              font-orbitron-700
              uppercase
              text-[#FF4C4C]
              text-[28px]
              leading-none
              tracking-[0.04em]
            "
          >
            Why Register ?
          </p>

          <h2
            className="  mt-1
              font-orbitron-500
              uppercase
              text-white
              text-[34px]
              leading-none
              tracking-[0.04em]"
          >
            The League Advantage
          </h2>

          <ul className="mt-14 space-y-12 sm:mt-16 sm:space-y-14 lg:mt-[72px] lg:space-y-[63px]">
            {benefits.map((benefit) => (
              <BenefitItem
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-12 flex w-full justify-center lg:mt-0 lg:absolute lg:right-[-50px] lg:top-[100px] lg:w-[831px]">
          <img
            src={leaderboardImage}
            alt="Leaderboard"
            className="
              block
              h-auto
              w-full
              max-w-[320px]
              object-contain
              lg:max-w-[600px]
            "
          />
        </div>
      </div>
    </section>
  )
}

export default LeagueAdvantage
