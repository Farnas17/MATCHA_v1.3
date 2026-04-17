export default function MatchaLogo({ compact = false }) {
  const sizeClass = compact ? "h-9 w-9" : "h-10 w-10";

  return (
    <div
      className={`grid ${sizeClass} place-items-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,#45622d_0%,#5d7b43_100%)] shadow-[0_10px_22px_rgba(69,98,45,0.18)]`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23 14C21 11 22 8 24 6"
          stroke="#F8F6EF"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.95"
        />
        <path
          d="M31 16C29 13 30 10 32 8"
          stroke="#F8F6EF"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.95"
        />
        <path
          d="M39 14C37 11 38 8 40 6"
          stroke="#F8F6EF"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.95"
        />
        <path
          d="M16 27C16 38 23 46 32 46C41 46 48 38 48 27H16Z"
          fill="#F5F3ED"
        />
        <path
          d="M19 28C20.5 36.5 25.7 42 32 42C38.3 42 43.5 36.5 45 28H19Z"
          fill="#B7D48F"
        />
        <path
          d="M48 29H52C55.3137 29 58 31.6863 58 35C58 38.3137 55.3137 41 52 41H47"
          stroke="#F5F3ED"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 27H50"
          stroke="#F8F6EF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M12 48H52"
          stroke="#E7E2D4"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
