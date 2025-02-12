const Facebook = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="100"
    height="100"
    fill="none"
  >
    <g clip-path="url(#a)">
      <path
        d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z"
        fill="#1977F3"
      />
      <path
        d="M62.57 51.957h-8.922v32.686H40.13V51.957h-6.429V40.47h6.43v-7.433c0-5.316 2.524-13.64 13.637-13.64l10.013.042v11.15h-7.265c-1.192 0-2.868.596-2.868 3.132v6.76H63.75l-1.18 11.476Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Facebook;
