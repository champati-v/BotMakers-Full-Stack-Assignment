import settingsIcon from '../assets/settings.png'
import tajMahalIcon from '../assets/Taj_mahal.png'
import ranking from '../assets/ranking.png'
import communityIcon from '../assets/community.png'
import JourneyStep from '../components/JourneyStep'

const steps = [
  {
    step: 'STEP 1',
    title: 'BUILD YOUR TEAM',
    icon: settingsIcon,
  },
  {
    step: 'STEP 2',
    title: 'COMPETE ACROSS INDIA',
    icon: tajMahalIcon,
  },
  {
    step: 'STEP 3',
    title: 'EARN NATIONAL RANKING & VALUE',
    icon: ranking,
  },
  {
    step: 'STEP 4',
    title: 'JOIN THE LEAGUE',
    icon: communityIcon,
  },
]

function UserJourney() {
  return (
    <section className="relative isolate min-h-[calc(100dvh-103px)] overflow-hidden bg-black text-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,76,76,0.12)_0%,rgba(0,0,0,0)_38%),radial-gradient(circle_at_15%_72%,rgba(255,76,76,0.08)_0%,rgba(0,0,0,0)_26%),radial-gradient(circle_at_85%_72%,rgba(255,76,76,0.08)_0%,rgba(0,0,0,0)_26%)]" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-103px)] max-w-[1440px] flex-col justify-center px-6 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-[1150px] text-center">
          <p className="font-body text-[clamp(1rem,1.6vw,28px)] uppercase tracking-[0.02em] text-accent">
            User Journey
          </p>
          <h2 className="mt-2 font-orbitron-500 text-[clamp(2rem,4.2vw,54px)] uppercase leading-[1.05] tracking-[0.02em] text-primary">
            Your Path To The League
          </h2>
          <p className="mt-2 font-body text-[clamp(1rem,1.5vw,22px)] text-secondary/40">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          <div className="pointer-events-none absolute left-[7.25rem] top-[69px] hidden h-[4px] w-[calc(100%-14.5rem)] bg-[#2d1bff] xl:block z-0" />

          {steps.map((step) => (
            <JourneyStep
              key={step.step}
              step={step.step}
              title={step.title}
              icon={
                <img
                  src={step.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-[42px] w-[42px] object-contain md:h-[48px] md:w-[48px]"
                />
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UserJourney
