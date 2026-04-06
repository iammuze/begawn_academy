"use client";

export function Stars({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex gap-px">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 12 12"
          fill={i <= Math.round(rating) ? "#f59e0b" : "#d1d5db"}
        >
          <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
        </svg>
      ))}
    </span>
  );
}

export function Avatar({
  initials,
  bg,
  size = 32,
}: {
  initials: string;
  bg: string;
  size?: number;
}) {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
      style={{
        width: size,
        height: size,
        background: bg,
        fontSize: size * 0.36,
      }}
    >
      {initials}
    </div>
  );
}
