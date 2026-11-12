// Clearly-labelled temporary visual. Swap for <Image> once real photography exists.
export default function Placeholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className="arch relative flex h-full w-full flex-col items-center justify-end gap-6 overflow-hidden bg-beige px-6 pb-10 pt-16"
    >
      <svg viewBox="0 0 120 200" className="h-40 w-auto text-olive/40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="44" y="6" width="32" height="22" rx="3" />
        <rect x="54" y="28" width="12" height="14" />
        <path d="M30 60c0-10 8-18 18-18h24c10 0 18 8 18 18v110c0 12-8 22-18 22H48c-10 0-18-10-18-22z" />
        <path d="M44 100h32" />
      </svg>
      <p className="text-center text-xs tracking-wide text-espresso/70">{label}</p>
    </div>
  );
}
