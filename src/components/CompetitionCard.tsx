import type { ReactNode } from 'react'

type CompetitionCardProps = {
  title: string
  subtitle: string
  badge?: ReactNode
  children: ReactNode
}

function CompetitionCard({
  title,
  subtitle,
  badge,
  children,
}: CompetitionCardProps) {
  return (
    <article className="h-full rounded-[6px] border border-[#555] bg-[#202020] px-4 py-5 shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-body text-[20px] leading-tight text-primary">
            {title}
          </h3>
          <p className="mt-1 font-body text-[17px] text-[#9e9e9e]">
            {subtitle}
          </p>
        </div>
        {badge}
      </div>

      <div className="mt-3 h-px w-full bg-white/15" />

      <div className="mt-4">{children}</div>
    </article>
  )
}

export default CompetitionCard
