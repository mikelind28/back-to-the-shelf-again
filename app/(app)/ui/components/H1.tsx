import { ReactNode } from "react";
import { amatic, cursive } from "@/ui/fonts";

type H1Type = {
  line1: ReactNode;
  line2?: ReactNode;
};

export default function H1({ line1, line2 }: H1Type) {
  return (
    <h1 className="text-center">
      <span className={`${amatic.className} text-5xl/8 md:text-6xl/10`}>
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
