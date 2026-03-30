import { titleHeader } from "../fonts";

type H2Type = {
  color: "green" | "pink";
  text: string;
};

export default function H2({ color, text }: H2Type) {
  return (
    <h2
      className={`${titleHeader.className} py-3 text-center text-3xl sm:text-4xl text-${color}-400 underline decoration-1 underline-offset-1 sm:underline-offset-2`}
    >
      {text}
    </h2>
  );
}
