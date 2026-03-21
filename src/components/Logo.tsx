import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export function Logo({ className, theme = "light" }: LogoProps) {
  const textColor = theme === "light" ? "text-brand-navy" : "text-white";
  const blockBg = theme === "light" ? "bg-brand-navy" : "bg-brand-navy-light";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* TFS Blocks */}
      <div className="flex items-center gap-1">
        <div className="flex flex-col gap-1">
          <div className={cn("w-8 h-9 flex items-center justify-center text-white font-serif text-xl", blockBg)}>
            T
          </div>
          <div className="w-8 h-1.5 bg-brand-teal"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className={cn("w-8 h-9 flex items-center justify-center text-white font-serif text-xl", blockBg)}>
            F
          </div>
          <div className="w-8 h-1.5 bg-brand-green"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className={cn("w-8 h-9 flex items-center justify-center text-white font-serif text-xl", blockBg)}>
            S
          </div>
          <div className="w-8 h-1.5 bg-brand-orange"></div>
        </div>
      </div>
      
      {/* Text */}
      <div className="flex flex-col justify-center">
        <span className={cn("font-bold text-[1.35rem] leading-none tracking-[0.08em]", textColor)}>
          TALENTFORGE
        </span>
        <span className={cn("font-serif text-[0.65rem] leading-none tracking-[0.35em] mt-1.5 text-center ml-1", textColor)}>
          STRATEGY
        </span>
      </div>
    </div>
  );
}
