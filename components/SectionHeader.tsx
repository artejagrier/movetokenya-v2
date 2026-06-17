import { type ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "max-w-4xl";

  return (
    <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      <div
        className={`mb-5 flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {align === "left" && (
          <span className="hidden h-px flex-1 max-w-[80px] bg-[#C8102E] sm:block" />
        )}
        <p className="section-label">{label}</p>
        {align === "left" && (
          <span className="hidden h-px flex-1 bg-gray-200 sm:block" />
        )}
      </div>

      <h2 className="section-title mb-5">{title}</h2>

      {description && (
        <p className="editorial-subhead max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}

export function SectionDivider() {
  return <div className="section-divider" aria-hidden="true" />;
}

export function SectionShell({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`site-section ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
