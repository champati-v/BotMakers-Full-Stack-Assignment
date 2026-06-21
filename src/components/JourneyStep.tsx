import type { ReactNode } from 'react'

type JourneyStepProps = {
  step: string
  title: string
  icon: ReactNode
}

function JourneyStep({ step, title, icon }: JourneyStepProps) {
  return (
    <article className="relative z-10 flex flex-col items-center text-center">
      <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#343434] sm:h-[140px] sm:w-[140px]">
        <div className="flex h-[98px] w-[98px] items-center justify-center rounded-full border-[5px] border-[#2418ff] bg-[#050505] sm:h-[112px] sm:w-[112px] sm:border-[6px]">
          {icon}
        </div>
      </div>

      <div className="mt-4 h-10 w-px bg-white/55 md:mt-5 md:h-12" />

      <p className="font-body text-[clamp(1rem,1.4vw,22px)] uppercase tracking-[0.02em] text-accent">
        {step}
      </p>
      <p className="mt-3 max-w-[180px] font-body text-[clamp(1rem,1.35vw,22px)] uppercase leading-[1.15] tracking-[0.02em] text-primary">
        {title}
      </p>
    </article>
  )
}

export default JourneyStep
