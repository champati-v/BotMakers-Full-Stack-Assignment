type FeaturePointProps = {
  index: string
  title: string
  description: string
}

function FeaturePoint({ index, title, description }: FeaturePointProps) {
  return (
    <div className="max-w-[260px]">
      <p className="font-body text-[clamp(1.5rem,2vw,40px)] leading-none text-accent">
        {index}
      </p>
      <h3 className="mt-1 font-body text-[clamp(1.25rem,1.7vw,32px)] uppercase leading-[1.05] tracking-[0.02em] text-primary">
        {title}
      </h3>
      <p className="mt-2 font-body text-[clamp(0.95rem,1.2vw,18px)] leading-[1.25] text-secondary/45">
        {description}
      </p>
    </div>
  )
}

export default FeaturePoint
