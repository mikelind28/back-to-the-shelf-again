import { titleHeader } from "../fonts";

type H2Type = {
  color: "green" | "pink";
  text: string;
};

export default function H2({ color, text }: H2Type) {
  return (
    <h2
      className={`${titleHeader.className} py-3 text-center text-3xl sm:text-4xl text-${color}-400`}
    >
      {text}
    </h2>
  );
}
