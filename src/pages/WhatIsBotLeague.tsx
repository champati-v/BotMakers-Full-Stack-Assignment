import featuresIllustration from '../assets/features.png'
import mIcon from '../assets/M.png'
import bulbIcon from '../assets/bulb.png'
import engineerIcon from '../assets/engineer.png'
import mindIcon from '../assets/mind.png'
import CategoryCard from '../components/CategoryCard'
import FeaturePoint from '../components/FeaturePoint'

const features = [
  {
    index: '1.',
    title: 'Structured Events',
    description:
      '"From one-off events to a year-round competitive season."',
  },
  {
    index: '2.',
    title: 'Digital Identity',
    description:
      '"Your professional robotics legacy, tracked and verified."',
  },
  {
    index: '3.',
    title: 'National Ranking',
    description:
      '"Benchmark your skills against the best engineers in India."',
  },
  {
    index: '4.',
    title: 'Career Pathway',
    description:
      '"Turning arena victories into real-world industry opportunities."',
  },
]

const categories: Array<{
  title: string
  description: string
  icon: string
  highlighted?: boolean
}> = [
  {
    title: 'Mini Makers',
    description: 'Where Creativity Meets Logic.',
    icon: mIcon,
    highlighted: true,
  },
  {
    title: 'Junior Innovators',
    description: 'Engineering & Strategy Fundamentals.',
    icon: bulbIcon,
  },
  {
    title: 'Young Engineers',
    description: 'Advanced Wireless & Autonomous Control.',
    icon: engineerIcon,
  },
  {
    title: 'Robo Minds',
    description: 'Elite Professional Sports & Robotics.',
    icon: mindIcon,
  },
]

function WhatIsBotLeague() {
  return (
    <section className="relative isolate min-h-[calc(100dvh-103px)] overflow-hidden bg-[#1a1a1a] text-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,76,76,0.08)_0%,rgba(0,0,0,0)_28%),radial-gradient(circle_at_82%_28%,rgba(255,196,0,0.08)_0%,rgba(0,0,0,0)_24%),linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.28)_100%)]" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-103px)] max-w-[1440px] flex-col justify-center px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 xl:grid-cols-[1.35fr_0.85fr] xl:items-center">
          <div>
            <h2 className="font-orbitron-500 text-[clamp(2rem,3vw,44px)] uppercase leading-[1.05] tracking-[0.02em] text-primary">
              What Is BotLeague?
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {features.map((feature) => (
                <FeaturePoint
                  key={feature.index}
                  index={feature.index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center xl:justify-end">
            <img
              src={featuresIllustration}
              alt="BotLeague features illustration"
              className="h-auto w-full max-w-[340px] object-contain sm:max-w-[400px] xl:max-w-[420px]"
            />
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-orbitron-500 text-[clamp(1.8rem,2.6vw,40px)] uppercase tracking-[0.02em] text-primary">
            Categories
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={
                  <img
                    src={category.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-[64px] w-[64px] object-contain"
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsBotLeague
