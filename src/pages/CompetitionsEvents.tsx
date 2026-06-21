import CompetitionBracket from '../components/CompetitionBracket'
import CompetitionCard from '../components/CompetitionCard'
import EventCard from '../components/EventCard'

const upcomingEvents = [
  {
    title: 'Event in Mumbai',
    subtitle: 'Lorem Ipsum',
    details: [
      { label: 'Date', value: '11/11/25' },
      { label: 'Location', value: 'BKC' },
      { label: 'Category', value: 'Lorem' },
    ],
  },
  {
    title: 'Event in Delhi',
    subtitle: 'Lorem Ipsum',
    details: [
      { label: 'Date', value: '11/11/25' },
      { label: 'Location', value: 'BKC' },
      { label: 'Category', value: 'Lorem' },
    ],
  },
]

const pastResults = ['Bengaluru Regionals', 'Bengaluru Regionals', 'Bengaluru Regionals']

function CompetitionsEvents() {
  return (
    <section className="relative isolate min-h-[calc(100dvh-76px)] overflow-hidden bg-[#1a1717] text-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,76,76,0.20)_0%,rgba(255,76,76,0.10)_16%,rgba(0,0,0,0)_42%),radial-gradient(circle_at_92%_12%,rgba(255,76,76,0.18)_0%,rgba(255,76,76,0.08)_14%,rgba(0,0,0,0)_36%),linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,76,76,0.10)_0%,rgba(255,76,76,0.04)_22%,rgba(0,0,0,0)_52%,rgba(255,76,76,0.06)_78%,rgba(255,76,76,0.12)_100%)]" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-103px)] max-w-[1440px] flex-col justify-center px-6 py-12 sm:px-8 lg:px-10">
        <header className="mb-8 pt-4">
          <h2 className="font-orbitron-500 text-[clamp(2rem,4vw,52px)] uppercase tracking-[0.02em] text-primary">
            Competitions &amp; Events
          </h2>
        </header>

        <div className="grid gap-6 items-stretch lg:grid-cols-[1.18fr_0.98fr_0.92fr]">
          <div className="flex h-full flex-col">
            <h2 className="mb-6 font-orbitron-400 text-[clamp(0.5rem,1.5vw,28px)] uppercase tracking-[0.02em] text-accent">
              LIVE NOW
            </h2>
            <CompetitionCard
              title="Bengaluru Regionals"
              subtitle="Lorem Ipsum"
              badge={
                <span className="inline-flex h-[18px] items-center rounded-[4px] bg-accent px-2 font-body text-[11px] font-semibold text-white">
                  Ongoing
                </span>
              }
            >
              <CompetitionBracket className="mx-auto mt-2 h-[320px] w-full max-w-[440px]" />
            </CompetitionCard>
          </div>

          <div className="flex h-full flex-col">
            <h2 className="mb-6 font-orbitron-400 text-[clamp(0.5rem,1.5vw,28px)] uppercase tracking-[0.02em]">
              UPCOMING
            </h2>
            <div className="grid h-full flex-1 grid-rows-2 gap-5">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.title}
                  title={event.title}
                  details={event.details}
                />
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col">
            <h2 className="mb-6 font-orbitron-400 text-[clamp(0.5rem,1.5vw,28px)] uppercase tracking-[0.02em]">
              PAST RESULTS
            </h2>
            <article className="flex h-full flex-1 flex-col rounded-[6px] border border-[#555] bg-[#202020] px-4 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
              <div className="flex h-full flex-1 flex-col justify-start">
                {pastResults.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex flex-col py-3 first:pt-0 last:pb-0"
                  >
                    {index > 0 ? (
                      <div className="mb-4 h-[0.5px] w-full bg-white/15" />
                    ) : null}
                    <h4 className="font-body text-[18px] text-primary">
                      {item}
                    </h4>
                    <p className="mt-1 font-body text-[17px] text-[#9e9e9e]">
                      Lorem Ipsum
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetitionsEvents
