import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground/60 max-w-2xl leading-loose">
          {subtitle}
        </p>
      )}
      <div className={`h-[2px] bg-destructive w-20 mt-6 ${centered ? "mx-auto" : "ml-0"}`} />
    </div>
  );
}
