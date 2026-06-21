import type { ReactNode } from 'react'

type CategoryCardProps = {
  icon: ReactNode
  title: string
  description: string
}

function CategoryCard({
  icon,
  title,
  description,
}: CategoryCardProps) {
  return (
    <article
      className={[
        'group flex h-full flex-col rounded-[12px] border border-white/18 bg-[#282828] px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-all duration-300 ease-out',
        'hover:border-[#c89e00] hover:bg-[radial-gradient(circle_at_50%_10%,rgba(255,196,0,0.18)_0%,rgba(255,196,0,0.06)_28%,rgba(0,0,0,0)_70%),linear-gradient(180deg,rgba(255,196,0,0.04)_0%,rgba(255,255,255,0.02)_100%)] hover:shadow-[0_0_0_1px_rgba(200,158,0,0.55),0_0_26px_rgba(255,196,0,0.12)]',
      ].join(' ')}
    >
      <div className="flex h-14 w-14 items-center justify-center">
        {icon}
      </div>

      <h3 className="mt-4 font-orbitron-500 text-[clamp(1.25rem,1.8vw,28px)] uppercase leading-[1.05] tracking-[0.02em] text-primary">
        {title}
      </h3>

      <p className="mt-3 max-w-[220px] flex-1 font-body text-[clamp(0.9rem,1.15vw,16px)] leading-[1.35] text-secondary/45">
        {description}
      </p>

      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 font-body text-[clamp(0.95rem,1.2vw,18px)] uppercase tracking-[0.02em] text-accent transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        <span>Learn More</span>
        <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}

export default CategoryCard
