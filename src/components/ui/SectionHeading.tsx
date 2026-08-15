export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "ink" | "ivory";
}) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = tone === "ivory" ? "text-ivory" : "text-navy";
  const descColor = tone === "ivory" ? "text-ivory/75" : "text-muted";
  const eyebrowColor = tone === "ivory" ? "text-gold" : "text-gold-deep";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`font-display text-3xl leading-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
