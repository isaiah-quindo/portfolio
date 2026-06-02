// SAFE TO DELETE
//
// This `Placeholder` component used to render the dashed yellow
// "screen recording" box in page.tsx. That box was replaced with the
// real <video> (/videos/archetype-ui-demo.mp4), so this component is no
// longer imported anywhere.
//
// It is preserved here (not deleted) in case you want to reuse it for the
// three remaining metric placeholders in page.tsx. If you don't need it,
// review and delete this file manually.

export function Placeholder({
  label,
  aspect = "aspect-[16/9]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full ${aspect} rounded-4xl border-2 border-dashed border-yellow-400/60 bg-yellow-400/5 flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-6 py-4 text-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-yellow-300/80">
          Replace
        </span>
        <span className="text-sm md:text-base text-yellow-100 max-w-md">
          {label}
        </span>
      </div>
    </div>
  );
}
