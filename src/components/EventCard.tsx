import Button from './ui/Button'

type EventCardProps = {
  title: string
  details: Array<{
    label: string
    value: string
  }>
}

function EventCard({ title, details }: EventCardProps) {
  return (
    <article className="h-full rounded-[6px] border border-[#555] bg-[#202020] px-4 py-6 shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
      <h3 className="font-body text-[20px] leading-tight text-primary">
        {title}
      </h3>

      <div className="mt-3 h-[0.5px] w-full bg-white/15" />

      <div className="mt-4 grid grid-cols-3 gap-4 text-primary">
        {details.map((item) => (
          <div key={item.label}>
            <p className="font-body text-[14px] leading-none text-primary">
              {item.label}
            </p>
            <p className="mt-1 font-body text-[14px] font-semibold leading-none text-primary">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          variant="solid"
          size="sm"
          className="h-[30px] min-w-[300px] px-6 text-[18px] font-bold shadow-none"
        >
          REGISTER
        </Button>
      </div>
    </article>
  )
}

export default EventCard
