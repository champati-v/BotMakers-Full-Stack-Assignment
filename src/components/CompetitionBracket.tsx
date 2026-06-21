type CompetitionBracketProps = {
  className?: string
}

function CompetitionBracket({ className = '' }: CompetitionBracketProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 360 250"
        className="h-full w-full"
        aria-hidden="true"
      >
        <g fill="#5a5a5a">
          <rect x="6" y="16" width="94" height="28" rx="4" />
          <rect x="6" y="74" width="94" height="28" rx="4" />
          <rect x="6" y="132" width="94" height="28" rx="4" />
          <rect x="6" y="190" width="94" height="28" rx="4" />

          <rect x="138" y="45" width="90" height="28" rx="4" />
          <rect x="138" y="161" width="90" height="28" rx="4" />

          <rect x="264" y="103" width="90" height="28" rx="4" />
        </g>

        <g fill="none" stroke="#ff4c4c" strokeWidth="2" strokeLinecap="round">
          <path d="M100 30 H118 V59 H138" />
          <path d="M100 88 H118 V59 H138" />
          <path d="M100 146 H118 V174 H138" />
          <path d="M100 204 H118 V174 H138" />
          <path d="M228 59 H246 V116 H264" />
          <path d="M228 174 H246 V116 H264" />
        </g>

        <g fill="#1e1e1e">
          <circle cx="118" cy="59" r="4" />
          <circle cx="118" cy="174" r="4" />
          <circle cx="246" cy="116" r="4" />
        </g>
      </svg>
    </div>
  )
}

export default CompetitionBracket
