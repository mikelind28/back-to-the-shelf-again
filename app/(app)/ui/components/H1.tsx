import { ComponentPropsWithoutRef, ReactNode } from "react";
import { amatic, cursive } from "@/ui/fonts";
import { cn } from "@/lib/utils";

type H1Type = {
  line1: ReactNode;
  line2?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"h1">;

export default function H1({ line1, line2, className, ...h1Props }: H1Type) {
  return (
    <h1 {...h1Props} className="text-center">
      <span
        className={cn([
          `${amatic.className} text-5xl/8 md:text-6xl/10`,
          `${className}`,
        ])}
      >
        {line1}
      </span>
      {line2 && (
        <>
          <br />
          <span className={`${cursive.className} text-6xl/9 md:text-7xl/11`}>
            {line2}
          </span>
        </>
      )}
    </h1>
  );
}
