"use client"

export function PalmLeafLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M180 400C180 400 160 300 100 200C40 100 10 50 10 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M180 400C180 400 140 320 80 240C20 160 0 100 0 100"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.2"
      />
      <path
        d="M180 400C180 400 170 280 120 180C70 80 30 30 30 30"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.15"
      />
      {/* Leaf veins */}
      <path d="M100 200C80 180 60 150 50 120" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <path d="M80 240C60 210 40 180 30 150" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <path d="M120 180C100 150 80 120 70 90" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </svg>
  )
}

export function PalmLeafRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 400C20 400 40 300 100 200C160 100 190 50 190 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M20 400C20 400 60 320 120 240C180 160 200 100 200 100"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.2"
      />
      <path
        d="M20 400C20 400 30 280 80 180C130 80 170 30 170 30"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.15"
      />
      {/* Leaf veins */}
      <path d="M100 200C120 180 140 150 150 120" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <path d="M120 240C140 210 160 180 170 150" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <path d="M80 180C100 150 120 120 130 90" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </svg>
  )
}

export function CoconutPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="35" cy="40" r="5" fill="currentColor" opacity="0.1" />
      <circle cx="65" cy="40" r="5" fill="currentColor" opacity="0.1" />
      <circle cx="50" cy="60" r="5" fill="currentColor" opacity="0.1" />
    </svg>
  )
}

export function HeroWave({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M0 120L60 115C120 110 240 100 360 95C480 90 600 90 720 92C840 94 960 98 1080 100C1200 102 1320 102 1380 102L1440 102V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function AbstractDots({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {[...Array(20)].map((_, i) => (
        <circle
          key={i}
          cx={20 + (i % 5) * 40}
          cy={20 + Math.floor(i / 5) * 40}
          r={2 + (i % 3)}
          fill="currentColor"
          opacity={0.1 + (i % 4) * 0.05}
        />
      ))}
    </svg>
  )
}
