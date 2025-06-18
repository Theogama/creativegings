
const TailwindLogo = () => (
  <svg viewBox="0 0 40 40" width={40} height={40}>
    <defs>
      <linearGradient id="tw-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#38bdf8"/>
        <stop offset="1" stopColor="#0ea5e9"/>
      </linearGradient>
    </defs>
    <path
      fill="url(#tw-gradient)"
      d="M20 15c-5.5 0-6.667 2.667-10 8 2.222-5.333 4.444-7.111 10-7.111S27.778 17 30 22c-3.333-5.333-4.5-8-10-8zm0 6c-5.5 0-6.667 2.667-10 8 2.222-5.333 4.444-7.111 10-7.111S27.778 23 30 28c-3.333-5.333-4.5-8-10-8z"
    />
  </svg>
)
export default TailwindLogo;
