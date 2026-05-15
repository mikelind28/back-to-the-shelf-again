import { ComponentPropsWithoutRef } from "react";
import { titleHeader } from "../fonts";
import { cn } from "@/lib/utils";

type H2Type = {
  text: string;
  className?: string;
} & ComponentPropsWithoutRef<"h2">;

export default function H2({ text, className, ...h2Props }: H2Type) {
  return (
    <h2
      {...h2Props}
      className={cn([
        `${titleHeader.className} py-3 text-center text-3xl sm:text-4xl`,
        `${className}`,
      ])}
    >
      {text}
    </h2>
  );
}
